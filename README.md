# Compteur de Points TCG

Application Android de compteur de points pour jeux de cartes à collectionner.

| Jeu | État |
|---|---|
| Magic: The Gathering | ✅ Disponible |
| Flesh and Blood | ✅ Disponible |
| Lorcana | ✅ Disponible |
| Star Wars | 🔜 Bientôt |
| Naruto Mythos | 🔜 Bientôt |
| Yu-Gi-Oh! | 🔜 Bientôt |

## Magic
- Formats : Standard (2 joueurs), Commander (2 à 5), Duel Commander (2), Archenemy (3 à 5)
- Points de vie de départ : 20, 25, 30, 40 ou personnalisé (vie de l'Archenemy séparée : 30 à 60)
- Nom de chaque joueur, tirage au sort de celui qui commence
- Menu de partie : Monarque, Bénédiction de la cité, dé 20, pile ou face, recommencer

## Flesh and Blood
- 2 joueurs nommés
- Formats : Blitz (20 PV), Classic Constructed (40 PV), Silver Age (20 PV) — vie modifiable pour chaque joueur selon le héros
- Jetons Puissance et Agilité pour chaque joueur

## Lorcana
- 2 à 4 joueurs nommés
- Compteur de lore de 0 à 20, victoire annoncée à 20

Toucher = ±1, appui long = ±10. La partie est sauvegardée automatiquement.

## Obtenir l'APK
Chaque `push` sur `main` compile l'APK automatiquement (GitHub Actions) :
**Actions → dernière exécution → Artifacts → CompteurDePoint-apk**.

Pour publier une version : créer un tag `v1.0.0` → l'APK apparaît dans **Releases**.

## Structure
- `app/src/main/assets/index.html` — toute l'interface (HTML/CSS/JS)
- `app/src/main/java/.../MainActivity.java` — conteneur Android plein écran
- `app/src/main/res/drawable/ic_launcher_fg.xml` — icône (vectorielle)
- `app/compteur.keystore.b64` — clé de signature, stockée en base64 et décodée automatiquement à la compilation
