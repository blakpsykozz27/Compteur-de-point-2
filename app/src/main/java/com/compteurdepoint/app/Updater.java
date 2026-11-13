package com.compteurdepoint.app;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Vérification des mises à jour depuis les Releases GitHub du dépôt.
 * Au lancement : si une version plus récente existe, propose de la télécharger.
 * Le téléchargement et l'installation se font par le navigateur, comme une installation
 * manuelle : l'appli ne demande pas le droit d'installer des applications
 * (ce droit fait bloquer l'appli par Play Protect).
 */
public class Updater {

    static final String LATEST_URL =
            "https://api.github.com/repos/blakpsykozz27/compteur-de-point-2/releases/latest";

    private final Activity activity;
    private final Handler ui = new Handler(Looper.getMainLooper());
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
        String msg = "Version " + remote + " disponible (tu as la " + local + ").\n\n"
                + "Le téléchargement s'ouvre dans le navigateur : ouvre ensuite le fichier pour l'installer.";
        if (notes != null && !notes.trim().isEmpty()) msg += "\n\n" + notes.trim();
        new AlertDialog.Builder(activity)
                .setTitle("Mise à jour disponible")
                .setMessage(msg)
                .setPositiveButton("Télécharger", (d, w) -> {
                    busy = false;
                    try {
                        activity.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
                    } catch (Exception e) {
                        toast("Aucun navigateur pour ouvrir le lien");
                    }
                })
                .setNegativeButton("Plus tard", (d, w) -> busy = false)
                .setOnCancelListener(d -> busy = false)
                .show();
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

    private static byte[] get(String url) throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
        c.setConnectTimeout(10000);
        c.setReadTimeout(20000);
        c.setRequestProperty("User-Agent", "CompteurDePoint-Android");
        c.setRequestProperty("Accept", "application/vnd.github+json");
        if (c.getResponseCode() >= 400) throw new Exception("HTTP " + c.getResponseCode());
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
