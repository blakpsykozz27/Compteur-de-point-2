# Compteur de Points TCG

Application Android de compteur de points pour jeux de cartes à collectionner.

| Jeu | État |
|---|---|
| Magic: The Gathering | ✅ Disponible |
| Flesh and Blood | ✅ Disponible |
| Lorcana | ✅ Disponible |
| Naruto Mythos | ✅ Disponible |
| Yu-Gi-Oh! | ✅ Disponible |
| Star Wars Unlimited | ✅ Disponible |
| Riftbound | ✅ Disponible |

## Pour tous les jeux
- Avatar au choix pour chaque joueur au lancement de la partie (10 avatars : Mage, Chevalier, Ninja, Dragon, Robot, Renard, Hibou, Pirate, Fantôme, Lion)
- Fond d'écran propre à chaque jeu sur le compteur de points de vie

## Magic
- Formats : Standard (2 joueurs), Commander (2 à 5), Duel Commander (2), Archenemy (3 à 5)
- Points de vie de départ : 20, 25, 30, 40 ou personnalisé (vie de l'Archenemy séparée : 30 à 60)
- Menu de partie : Monarque, Bénédiction de la cité, dé 20, pile ou face, recommencer

## Flesh and Blood
- 2 joueurs nommés
- Formats : Blitz (20 PV), Classic Constructed (40 PV), Silver Age (20 PV) — vie modifiable pour chaque joueur selon le héros
- Jetons Puissance et Agilité pour chaque joueur

## Lorcana
- 2 à 4 joueurs nommés
- Compteur de lore de 0 à 20, victoire annoncée à 20

## Naruto Mythos
- 2 joueurs nommés
- Compteur de points (départ à 0) et compteur de chakra de 0 à 100
- Points de mission comptés depuis le menu de partie (📜), affichés sous le nom de chaque joueur

## Yu-Gi-Oh!
- Normal (8000 LP) ou Speed Duel (4000 LP)
- 1 contre 1, ou 2 contre 2 (Tag Duel, LP partagés par équipe)
- Toucher = ±100, appui long = ±1000, calculatrice dans le menu, dé 6

## Star Wars Unlimited
- 2 joueurs nommés
- 30 PV par défaut, modifiables pour chaque joueur

## Riftbound
- Duel (2 joueurs, 8 points), Chacun pour soi (3 ou 4 joueurs, 8 points), 2 contre 2 (points partagés par équipe, 11 points)
- Compteur de points de 0 à l'objectif, victoire annoncée à l'objectif
- Menu de partie : journal, pile ou face, qui commence, dé 20, victoire, recommencer

Toucher = ±1, appui long = ±10 (sauf Yu-Gi-Oh!). La partie est sauvegardée automatiquement.

## Obtenir l'APK
Chaque `push` sur `main` compile l'APK automatiquement (GitHub Actions) :
**Actions → dernière exécution → Artifacts → CompteurDePoint-apk**.

Chaque push publie aussi automatiquement une **Release** `v<versionName>` avec l'APK.

## Mise à jour automatique
Au lancement, l'appli vérifie la dernière Release GitHub. Si sa version est plus récente, elle propose « Télécharger » : l'APK s'ouvre dans le navigateur, puis on l'installe comme d'habitude. L'appli ne demande pas le droit d'installer des applications, que Play Protect considère comme dangereux. Un bouton « Vérifier les mises à jour » est aussi présent en bas de l'accueil.

Pour publier une mise à jour : augmenter `versionCode` et `versionName` dans `app/build.gradle`, puis pousser sur `main`.

## Structure
- `app/src/main/assets/index.html` — toute l'interface (HTML/CSS/JS)
- `app/src/main/java/.../MainActivity.java` — conteneur Android plein écran
- `app/src/main/res/drawable/ic_launcher_fg.xml` — icône (vectorielle)
- `app/compteur.keystore.b64` — clé de signature, stockée en base64 et décodée automatiquement à la compilation
