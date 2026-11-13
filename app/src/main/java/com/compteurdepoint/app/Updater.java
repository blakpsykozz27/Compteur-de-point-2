package com.compteurdepoint.app;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageInstaller;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Mise à jour automatique depuis les Releases GitHub du dépôt.
 * Au lancement : vérifie la dernière Release, propose la mise à jour,
 * télécharge l'APK puis lance l'installation (Android demande une confirmation).
 */
public class Updater {

    static final String LATEST_URL =
            "https://api.github.com/repos/blakpsykozz27/compteur-de-point-2/releases/latest";
    static final String ACTION_INSTALL_STATUS = "com.compteurdepoint.app.INSTALL_STATUS";

    private final Activity activity;
    private final Handler ui = new Handler(Looper.getMainLooper());
    private File pendingApk;            // APK téléchargé, en attente de l'autorisation d'installer
    private boolean waitingPermission;
    private boolean busy;

    Updater(Activity activity) {
        this.activity = activity;
    }

    /** Vérifie en arrière-plan si une version plus récente existe. */
    void check(final boolean manual) {
        if (busy) return;
        busy = true;
        new Thread(() -> {
            try {
                JSONObject rel = new JSONObject(new String(get(LATEST_URL), "UTF-8"));
                String tag = rel.optString("tag_name", "");
                String remote = tag.startsWith("v") ? tag.substring(1) : tag;
                String apkUrl = null;
                JSONArray assets = rel.optJSONArray("assets");
                if (assets != null) {
                    for (int i = 0; i < assets.length(); i++) {
                        JSONObject a = assets.getJSONObject(i);
                        if (a.optString("name").endsWith(".apk")) {
                            apkUrl = a.optString("browser_download_url");
                            break;
                        }
                    }
                }
                final String local = currentVersion();
                final String url = apkUrl;
                if (url != null && compare(remote, local) > 0) {
                    final String notes = rel.optString("body", "");
                    ui.post(() -> askUpdate(remote, local, notes, url));
                } else {
                    busy = false;
                    if (manual) ui.post(() -> toast("L'appli est à jour (" + local + ")"));
                }
            } catch (Exception e) {
                busy = false;
                if (manual) ui.post(() -> toast("Impossible de vérifier les mises à jour"));
            }
        }).start();
    }

    private void askUpdate(String remote, String local, String notes, String url) {
        if (activity.isFinishing()) { busy = false; return; }
        String msg = "Version " + remote + " disponible (tu as la " + local + ").";
        if (notes != null && !notes.trim().isEmpty()) msg += "\n\n" + notes.trim();
        new AlertDialog.Builder(activity)
                .setTitle("Mise à jour disponible")
                .setMessage(msg)
                .setPositiveButton("Mettre à jour", (d, w) -> download(url))
                .setNegativeButton("Plus tard", (d, w) -> busy = false)
                .setOnCancelListener(d -> busy = false)
                .show();
    }

    private void download(final String url) {
        final AlertDialog progress = new AlertDialog.Builder(activity)
                .setTitle("Téléchargement…")
                .setMessage("0 %")
                .setCancelable(false)
                .show();
        new Thread(() -> {
            File out = new File(activity.getCacheDir(), "update.apk");
            try {
                HttpURLConnection c = open(url);
                long total = c.getContentLength();
                try (InputStream in = c.getInputStream(); OutputStream os = new FileOutputStream(out)) {
                    byte[] buf = new byte[64 * 1024];
                    long done = 0;
                    int n, last = -1;
                    while ((n = in.read(buf)) > 0) {
                        os.write(buf, 0, n);
                        done += n;
                        if (total > 0) {
                            final int pct = (int) (done * 100 / total);
                            if (pct != last) {
                                last = pct;
                                ui.post(() -> progress.setMessage(pct + " %"));
                            }
                        }
                    }
                }
                ui.post(() -> {
                    progress.dismiss();
                    pendingApk = out;
                    installOrAskPermission();
                });
            } catch (Exception e) {
                ui.post(() -> {
                    progress.dismiss();
                    busy = false;
                    toast("Échec du téléchargement de la mise à jour");
                });
            }
        }).start();
    }

    /** Android 8+ : l'appli doit être autorisée à installer des applications. */
    private void installOrAskPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
                && !activity.getPackageManager().canRequestPackageInstalls()) {
            new AlertDialog.Builder(activity)
                    .setTitle("Autorisation nécessaire")
                    .setMessage("Autorise « Compteur de Points » à installer des applications, puis reviens dans l'appli : la mise à jour s'installera.")
                    .setPositiveButton("Ouvrir les réglages", (d, w) -> {
                        waitingPermission = true;
                        activity.startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                                Uri.parse("package:" + activity.getPackageName())));
                    })
                    .setNegativeButton("Annuler", (d, w) -> busy = false)
                    .setCancelable(false)
                    .show();
            return;
        }
        install(pendingApk);
    }

    /** À appeler dans onResume : reprend l'installation au retour des réglages. */
    void onResume() {
        if (!waitingPermission || pendingApk == null) return;
        waitingPermission = false;
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O
                || activity.getPackageManager().canRequestPackageInstalls()) {
            install(pendingApk);
        } else {
            busy = false;
            toast("Mise à jour annulée : autorisation refusée");
        }
    }

    private void install(File apk) {
        try {
            PackageInstaller pi = activity.getPackageManager().getPackageInstaller();
            PackageInstaller.SessionParams params =
                    new PackageInstaller.SessionParams(PackageInstaller.SessionParams.MODE_FULL_INSTALL);
            params.setAppPackageName(activity.getPackageName());
            int id = pi.createSession(params);
            try (PackageInstaller.Session session = pi.openSession(id)) {
                try (InputStream in = new FileInputStream(apk);
                     OutputStream os = session.openWrite("update.apk", 0, apk.length())) {
                    byte[] buf = new byte[64 * 1024];
                    int n;
                    while ((n = in.read(buf)) > 0) os.write(buf, 0, n);
                    session.fsync(os);
                }
                Intent cb = new Intent(activity, MainActivity.class)
                        .setAction(ACTION_INSTALL_STATUS)
                        .addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
                int flags = PendingIntent.FLAG_UPDATE_CURRENT;
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) flags |= PendingIntent.FLAG_MUTABLE;
                PendingIntent pIntent = PendingIntent.getActivity(activity, 0, cb, flags);
                session.commit(pIntent.getIntentSender());
            }
        } catch (Exception e) {
            busy = false;
            toast("Échec de l'installation de la mise à jour");
        }
    }

    /** Résultat renvoyé par l'installateur Android (via MainActivity.onNewIntent). */
    void onInstallStatus(Intent intent) {
        int status = intent.getIntExtra(PackageInstaller.EXTRA_STATUS, PackageInstaller.STATUS_FAILURE);
        if (status == PackageInstaller.STATUS_PENDING_USER_ACTION) {
            Intent confirm = intent.getParcelableExtra(Intent.EXTRA_INTENT);
            if (confirm != null) {
                confirm.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                activity.startActivity(confirm);
            }
        } else if (status != PackageInstaller.STATUS_SUCCESS) {
            busy = false;
            String m = intent.getStringExtra(PackageInstaller.EXTRA_STATUS_MESSAGE);
            if (status != PackageInstaller.STATUS_FAILURE_ABORTED)
                toast("Mise à jour non installée" + (m != null ? " : " + m : ""));
        }
    }

    private String currentVersion() {
        try {
            PackageInfo p = activity.getPackageManager().getPackageInfo(activity.getPackageName(), 0);
            return p.versionName;
        } catch (Exception e) {
            return "0";
        }
    }

    /** Compare deux versions « 1.8.0 » numériquement. */
    static int compare(String a, String b) {
        String[] x = a.split("[.\\-]"), y = b.split("[.\\-]");
        for (int i = 0; i < Math.max(x.length, y.length); i++) {
            int p = i < x.length ? num(x[i]) : 0, q = i < y.length ? num(y[i]) : 0;
            if (p != q) return p > q ? 1 : -1;
        }
        return 0;
    }

    private static int num(String s) {
        try { return Integer.parseInt(s.replaceAll("\\D", "")); } catch (Exception e) { return 0; }
    }

    private static HttpURLConnection open(String url) throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
        c.setConnectTimeout(10000);
        c.setReadTimeout(30000);
        c.setInstanceFollowRedirects(true);
        c.setRequestProperty("User-Agent", "CompteurDePoint-Android");
        c.setRequestProperty("Accept", "application/vnd.github+json, application/octet-stream");
        if (c.getResponseCode() >= 400) throw new Exception("HTTP " + c.getResponseCode());
        return c;
    }

    private static byte[] get(String url) throws Exception {
        HttpURLConnection c = open(url);
        try (InputStream in = c.getInputStream()) {
            ByteArrayOutputStream bo = new ByteArrayOutputStream();
            byte[] buf = new byte[8192];
            int n;
            while ((n = in.read(buf)) > 0) bo.write(buf, 0, n);
            return bo.toByteArray();
        }
    }

    private void toast(String m) {
        Toast.makeText(activity, m, Toast.LENGTH_LONG).show();
    }
}
