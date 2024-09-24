# Algorithme

euclide
2entiers positifs m et n, trouver le plus grand diviseur commun
qui divise m et n
diviser m/n trouver le reste
reste = 0?
m=n, n=reste => m/n trouver reste => reste =0?

ex:
m=21
n=15
m/n = 1 et reste 6 => 6=0? Non
donc m=15, n=6 m/n= 2 resste 3 3=0? non
m=6 n=3 m/n=2 reste 0 => 3 est le plus grand diviseur commun

```bash


```

grille=8x*9y
colonnes =8
rows=9
x=1colonne
y=1row
pieceA = (3x*3y)*3
pieceB = 4x*2y
pieceC=2x*3y
pieceD=3x*y
pieceE=(3x*2y)*2
pieceF=(x*4y)*2

grille= pieceA+pieceB+pieceC+pieceD+pieceE+pieceF

1-Créer un tableau 7x7 vide pour représenter la grille.
2-Remplir chaque case de la grille avec une lettre aléatoire de l'alphabet.
3-Vérifier si chaque colonne, chaque ligne et les deux diagonales principales forment un mot en ordre alphabétique.
4-Si la condition est remplie, le joueur a gagné.
5-Sinon, proposer au joueur de modifier une ou plusieurs lettres pour se rapprocher de la solution.
6-Répéter les étapes 3 à 5 jusqu'à ce que le joueur termine la grille avec des mots en ordre alphabétique dans chaque direction.
