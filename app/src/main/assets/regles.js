/* Résumé des règles principales de chaque jeu (aide-mémoire, ne remplace pas les règles officielles) */
window.RULES={
magic:{title:'Magic: The Gathering',sections:[
 ['But du jeu',[
  'Faire tomber la vie de l\'adversaire à 0 : 20 PV en Standard et Duel Commander, 40 PV en Commander.',
  'On perd aussi avec 10 marqueurs poison, ou si on doit piocher dans une bibliothèque vide.',
  'Commander : un joueur qui a subi 21 blessures de combat d\'un même commandant perd la partie.']],
 ['Mise en place',[
  'Deck de 60 cartes minimum (4 exemplaires max d\'une carte, sauf terrains de base). Commander : 100 cartes, 1 exemplaire de chaque.',
  'Chaque joueur pioche 7 cartes. Mulligan : on remélange et on repioche 7, puis on remet 1 carte sous la bibliothèque par mulligan déjà pris.',
  'À 2 joueurs, le premier joueur ne pioche pas à son premier tour.']],
 ['Tour de jeu',[
  'Début : dégagement, entretien, pioche.',
  'Phase principale 1, combat (attaquants, bloqueurs, blessures), phase principale 2, fin de tour.',
  'Un seul terrain joué par tour. Les créatures ont le « mal d\'invocation » : pas d\'attaque ni de capacité {T} le tour où elles arrivent.',
  'En fin de tour, on défausse jusqu\'à 7 cartes en main.']],
 ['Bon à savoir',[
  'Monarque : il pioche une carte de plus à sa fin de tour ; infliger des blessures de combat au monarque vole le titre.',
  'Bénédiction de la cité : obtenue en contrôlant 10 permanents ou plus, elle est permanente.']]
]},
fab:{title:'Flesh and Blood',sections:[
 ['But du jeu',[
  'Réduire la vie du héros adverse à 0. La vie de départ est indiquée sur la carte héros (jeune héros en Blitz, adulte en Classic Constructed).']],
 ['Mise en place',[
  'Blitz : héros jeune, deck de 40 cartes. Classic Constructed : héros adulte, deck de 60 cartes minimum.',
  'On pioche jusqu\'à son intellect (indiqué sur le héros, souvent 4).']],
 ['Tour de jeu',[
  'On a 1 point d\'action par tour : jouer une action ou une attaque coûte ce point (sauf effet « Go again »).',
  'On paie les coûts en « pitchant » des cartes de la main : leur gemme de couleur donne 1, 2 ou 3 ressources, puis elles vont sous le deck en fin de tour.',
  'Pour se défendre, on bloque avec des cartes de la main ou de l\'équipement : leur valeur de défense réduit les dégâts.',
  'En fin de tour : on peut mettre 1 carte face cachée dans l\'arsenal, puis on repioche jusqu\'à son intellect.']],
 ['Bon à savoir',[
  'Jetons Puissance (+1 attaque à la prochaine attaque) et Agilité (+1 défense) se suivent dans le menu 💪 de la partie.']]
]},
sw:{title:'Star Wars: Unlimited',sections:[
 ['But du jeu',[
  'Détruire la base adverse : elle est détruite quand elle a subi autant de dégâts que ses PV (souvent 30).']],
 ['Mise en place',[
  'Un leader, une base et un deck de 50 cartes minimum (3 exemplaires max).',
  'Pioche de 6 cartes (mulligan possible une fois), puis chaque joueur place 2 cartes de sa main face cachée comme ressources.',
  'Le jeton d\'initiative détermine qui agit en premier.']],
 ['Tour de jeu',[
  'Phase d\'action : les joueurs alternent, une action à la fois (jouer une carte, attaquer avec une unité, utiliser une capacité, ou prendre l\'initiative).',
  'Prendre l\'initiative : on récupère le jeton pour le prochain tour, mais on ne peut plus agir ce tour-ci.',
  'Les unités arrivent épuisées. Elles combattent dans leur arène : terrestre ou spatiale.',
  'Phase de regroupement : chacun pioche 2 cartes, peut mettre 1 carte en ressource, puis tout se redresse.']],
 ['Bon à savoir',[
  'Sentinelle : les attaques doivent viser cette unité si possible. Bouclier : annule les prochains dégâts subis.']]
]},
naruto:{title:'Naruto Mythos',sections:[
 ['But du jeu',[
  'La partie dure exactement 4 manches. À la fin de la 4e manche, le joueur qui a le plus de points de mission gagne.']],
 ['Mise en place',[
  'Le premier joueur est tiré au sort et reçoit le jeton Edge.',
  'Chaque joueur choisit au hasard 2 cartes Mission : elles forment la pioche de Missions.',
  'Chaque joueur pioche 5 cartes et peut remélanger et repiocher une fois.']],
 ['Une manche',[
  'Début : chaque joueur reçoit 5 chakra + 1 par personnage qu\'il a en jeu, pioche 2 cartes, et une nouvelle Mission arrive en jeu.',
  'Actions : les joueurs jouent leurs personnages à tour de rôle sur les Missions, en payant leur coût en chakra.',
  'Évaluation : sur chaque Mission, on additionne la Puissance de chaque joueur. Le plus fort gagne la Mission et marque ses points (il faut au moins 1 de Puissance).',
  'Le chakra non utilisé est perdu en fin de manche.']],
 ['Points de mission',[
  'Une Mission rapporte ses points de base + un bonus selon son rang : D +1 (manche 1), C +2, B +3, A +4.',
  'Les Missions restent en jeu : la première peut donc être marquée à chaque manche.']]
]},
ygo:{title:'Yu-Gi-Oh!',sections:[
 ['But du jeu',[
  'Faire tomber les LP adverses à 0 : 8000 LP en Normal, 4000 en Speed Duel.',
  'On perd aussi si on doit piocher dans un deck vide.']],
 ['Mise en place',[
  'Main Deck de 40 à 60 cartes, Extra Deck de 0 à 15, 3 exemplaires max d\'une carte.',
  'Chaque joueur pioche 5 cartes. Le premier joueur ne pioche pas et ne peut pas attaquer à son premier tour.']],
 ['Tour de jeu',[
  'Draw Phase, Standby Phase, Main Phase 1, Battle Phase, Main Phase 2, End Phase.',
  'Une seule Invocation Normale (ou Pose) par tour. Les monstres de niveau 5-6 demandent 1 Tribut, niveau 7+ en demandent 2.',
  'Les Invocations Spéciales (Fusion, Synchro, Xyz, Lien…) ne sont pas limitées en nombre.',
  'En fin de tour, on défausse jusqu\'à 6 cartes en main.']],
 ['Tag Duel (2 contre 2)',[
  'Les coéquipiers partagent leurs LP et leur terrain, et jouent à tour de rôle.']]
]},
lorcana:{title:'Disney Lorcana',sections:[
 ['But du jeu',[
  'Être le premier à atteindre 20 lore.',
  'On perd aussi si on doit piocher dans un deck vide.']],
 ['Mise en place',[
  'Deck de 60 cartes minimum, 4 exemplaires max, 1 ou 2 couleurs d\'encre.',
  'Chaque joueur pioche 7 cartes et peut remettre autant de cartes qu\'il veut sous le deck pour en repiocher autant (une fois).',
  'Le premier joueur ne pioche pas à son premier tour.']],
 ['Tour de jeu',[
  'Début : on redresse ses cartes, puis on pioche 1 carte.',
  'Une fois par tour, on peut mettre dans l\'encrier une carte qui porte le symbole d\'encre : elle sert à payer les coûts.',
  'Les personnages arrivent « secs » : ils ne peuvent agir qu\'à partir du tour suivant.',
  'Quête : on incline un personnage pour gagner autant de lore que sa valeur de lore.',
  'Défi : on incline un personnage pour combattre un personnage adverse incliné ; chacun inflige sa force à l\'autre.']]
]},
riftbound:{title:'Riftbound',sections:[
 ['But du jeu',[
  'Premier à 8 points en Duel et en Chacun pour soi, 11 points en 2 contre 2 (points partagés par l\'équipe).',
  'Il n\'y a pas de points de vie : on marque en contrôlant des Champs de bataille.']],
 ['Marquer des points',[
  'Conquérir : prendre le contrôle d\'un Champ de bataille rapporte 1 point.',
  'Tenir : garder un Champ de bataille jusqu\'au début de son tour rapporte 1 point.',
  'Dernier point : on ne peut pas le gagner en conquérant un seul Champ de bataille. Il faut le tenir, ou conquérir tous les Champs de bataille dans le même tour (sinon on pioche une carte à la place).']],
 ['Mise en place',[
  'Une Légende, un Champion, un deck principal de 40 cartes, un deck de runes de 12 cartes et des Champs de bataille.',
  'En Duel, le 2e joueur canalise une rune de plus à son premier tour.']],
 ['Tour de jeu',[
  'On canalise 2 runes par tour : elles donnent l\'énergie et la puissance pour payer les cartes.',
  'Les unités se déplacent vers les Champs de bataille ; deux camps sur le même Champ de bataille déclenchent un combat.']]
]}
};
