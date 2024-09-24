# get informations from api

```jsx
const express = require("express");
const app = express();

const serverPort = 3310;

const players = [
  {
    id: 1,
    prenom: "Zinedine",
    nom: "Zidane",
    poste: "milieu",
  },
  {
    id: 2,
    prenom: "Fabien",
    nom: "Barthez",
    poste: "gardien",
  },
  {
    id: 3,
    prenom: "Marcel",
    nom: "Desailly",
    poste: "defenseur",
  },
  {
    id: 4,
    prenom: "Bernard",
    nom: "Lama",
    poste: "gardien",
  },
  {
    id: 5,
    prenom: "Laurent",
    nom: "Blanc",
    poste: "defenseur",
  },
  {
    id: 6,
    prenom: "Didier",
    nom: "Deschamps",
    poste: "milieu",
  },
  {
    id: 7,
    prenom: "Lilian",
    nom: "Thuram",
    poste: "defenseur",
  },
  {
    id: 8,
    prenom: "Bixente",
    nom: "Lizarazu",
    poste: "defenseur",
  },
  {
    id: 9,
    prenom: "Emmanuel",
    nom: "Petit",
    poste: "milieu",
  },
  {
    id: 10,
    prenom: "Thierry",
    nom: "Henry",
    poste: "attaquant",
  },
  {
    id: 11,
    prenom: "David",
    nom: "Trezeguet",
    poste: "attaquant",
  },
  {
    id: 12,
    prenom: "Christophe",
    nom: "Dugarry",
    poste: "attaquant",
  },
  {
    id: 13,
    prenom: "Robert",
    nom: "Pires",
    poste: "milieu",
  },
  {
    id: 14,
    prenom: "Patrick",
    nom: "Vieira",
    poste: "milieu",
  },
  {
    id: 15,
    prenom: "Youri",
    nom: "Djorkaeff",
    poste: "attaquant",
  },
];

const teams = [
  {
    club: "PSG",
    pays: "France",
  },
  {
    club: "Olympique de Marseille",
    pays: "France",
  },
  {
    club: "Real Madrid",
    pays: "Espagne",
  },
  {
    club: "Juventus",
    pays: "Italie",
  },
  {
    club: "Newcastle United",
    pays: "Angleterre",
  },
];

const getPlayers = (req, res) => {
  // Utilisez cette propriété req.query pour servir une partie seulement du tableau. Si aucune limit n'a été spécifiée, la route devrait retourner un maximum de 10 éléments par défaut.
  // Si il y a une limite dans ma query alors je vais devoir limiter le nombre de résultats dans mon tableau par rapport à ce nombre
  // Sinon, par défaut, je vais devoir retourner 10 éléments

  const limit = req.query.limit;

  if (!limit) {
    // La méthode slice ci dessous me permet de garder 5 éléments de mon tableau players
    res.json(players.slice(0, 5));
  } else {
    res.json(players.slice(0, limit));
  }
};

const getPlayerById = (req, res) => {
  // "1" === 1 // C'est faux ! On devra utiliser parseInt C'est ok
  // on veut afficher uniquement le joueur qui a l'id qui est dans les params
  // on va devoir comparer les params, avec l'id du joueur
  const idPlayer = parseInt(req.params.id);
  const result = players.find((player) => player.id === idPlayer);

  // Si le joueur est trouvé, alors que je veux retourner son objet, sinon, je veux retourner une erreur 404
  //   !result ? res.sendStatus(404) : res.json(result);

  if (!result) {
    res.sendStatus(404);
  } else {
    res.json(result);
  }
};

const getTeamByNation = (req, res) => {
  const nation = req.query.nation;
  const result = teams.filter(
    (team) => team.pays.toLowerCase() === nation.toLowerCase(),
  );
  // Je vais devoir comparer ce qu'il y a dans les params nations dans mon endpoint avec le pays de chaque objet et donc retourner le club en conséquence.
  // Si mon tableau est rempli alors je renvoi ce tableau
  // Sinon, j'envoie une 404

  if (!result.length) {
    res.sendStatus(404);
  } else {
    res.json(result);
  }
};

app.get("/players", getPlayers);
app.get("/players/:id", getPlayerById);
app.get("/teams", getTeamByNation);

app.listen(serverPort, () => {
  console.log(`Le server tourne sur le port : ${serverPort}`);
});
```
