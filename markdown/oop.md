# object oriented programming

## how we did before

```js
// exemple 1 from scratch
let imageElement = document.createElement("img");
imageElement.src = "https://picsum.photos/200/300";
imageElement.alt = "Random Image";
document.body.appendChild(imageElement);

// exemple 2 from existing constructor (class)
// https://developer.mozilla.org/fr/docs/Web/API/HTMLImageElement/Image

let imageElement2 = new Image();
imageElement2.src = "https://picsum.photos/200/300";
imageElement2.alt = "Random Image";
document.body.appendChild(imageElement2);

setTimeout(() => {
  imageElement.src = "https://picsum.photos/200/300?grayscale";
}, 3000);
```

## how we do know

sans argument dans constructor

```js
// ms=milliseconds
class RandomImage extends Image {
  constructor() {
    super();
    this.src = "https://picsum.photos/200/300";
    this.alt = "Random image";
    document.body.appendChild(this);

    const thisObject = this;
    console.dir("thisobject", thisObject);
    console.dir("this", this);
    setTimeout(() => {
      this.changeImage.call(thisObject);
    }, 3000);
  }

  // callback function
  changeImage() {
    console.info("Changing image");
    // to check the context of 'this'
    console.dir(this);
    this.src = "https://picsum.photos/id/237/200/300";
    this.alt = "Random image2";
  }
}

let randomImage = new RandomImage();
```

avec argument dans constructor

```js
// ms=milliseconds
class RandomImage extends Image {
  constructor(ms) {
    super();
    this.src = "https://picsum.photos/200/300";
    this.alt = "Random image";
    document.body.appendChild(this);

    const thisObject = this;
    console.dir("thisobject", thisObject);
    console.dir("this", this);
    setTimeout(() => {
      this.changeImage.call(thisObject);
    }, ms);
  }

  // callback function
  changeImage() {
    console.info("Changing image");
    // to check the context of 'this'
    console.dir(this);
    this.src = "https://picsum.photos/id/237/200/300";
    this.alt = "Random image2";
  }
}

let randomImage = new RandomImage(1000);

let randomImage1 = new RandomImage(3000);
```

addeventlistener

```js
class RandomImage extends Image {
  constructor(ms) {
    super();
    this.src = "https://picsum.photos/200/300";
    this.alt = "Random image";
    document.body.appendChild(this);

    this.addEventListener("click", this.changeImage);
  }

  // callback function
  changeImage() {
    console.info("Changing image");
    // to check the context of 'this'
    console.dir(this);
    this.src = "https://picsum.photos/id/237/200/300";
    this.alt = "Random image2";
  }
}

let randomImage = new RandomImage(1000);

let randomImage1 = new RandomImage(3000);

let randomImage2 = new RandomImage(5000);
```

toggle

```js
class RandomImage extends Image {
  constructor() {
    super();
    document.body.appendChild(this);
    this.toggleImage();
    this.addEventListener("click", this.toggleImage);
  }

  // callback function
  toggleImage() {
    if (this.src !== "https://picsum.photos/200/300") {
      this.src = "https://picsum.photos/200/300";
      this.alt = "Random image2";
    } else {
      this.src = "https://picsum.photos/id/237/200/300";
      this.alt = "Random image";
    }
  }
}

let randomImage = new RandomImage();
```

## heracles projet

### labour1

déclarer une class : format

```jsx
let Max_life = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.life = Max_life;
    this.dexterity = dexterity;
  }

  // method(actions)
  fight(opponent) {
    console.info(`${this.name} is fighting ${opponent.name}`);
    const attackPoints = Math.floor(Math.random() * this.strength) + 1;
    const damages = Math.max(attackPoints - opponent.dexterity, 0);
    opponent.life = Math.max(opponent.life - damages, 0);
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
```

créer une instance dans un fichier: format

```jsx
const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔Heracles", 20, 6, 100);
const NemeanLion = new Fighter("🦁Nemean Lion", 11, 13, 50);
```

```jsx
const Fighter = require("./src/Fighter");

// const fighters = [
//     new Fighter('🧔Heracles', 20, 6),
//     new Fighter('🦁Nemean Lion', 11, 13),
// ]
// boucle pour chaque fighter

// for (const fighter of fighters) {
//     console.info(`${fighter.name} has ${fighter.life} points of life.`);
// }
// OU

const heracles = new Fighter("🧔Heracles", 20, 6, 100);
const nemeanLion = new Fighter("🦁Nemean Lion", 11, 13, 50);

// on appelle la méthode fight de l'objet heracles
//lancer la bataille
// tant qu'il est en vie, heracles attack nemean
// tant qu'il est en vie, nemean va riposter

// calculer le score de la bataille
const score = (fighter1, fighter2) => {
  return fighter1.life
    ? {
        winner: fighter1,
        looser: fighter2,
      }
    : {
        winner: fighter2,
        looser: fighter1,
      };
};

// créer une fonction pour ne pas répéter le code

const display = (fighter1, fighter2) => {
  console.info(`round#: ${round}`);
  return `${fighter1.name} 🗡️ ${fighter2.name}, ${fighter2.name} has ${fighter2.life} 💙points of life.`;
};

let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {
  heracles.fight(nemeanLion);
  console.info(display(heracles, nemeanLion));

  if (nemeanLion.isAlive()) {
    nemeanLion.fight(heracles);
    console.info(display(nemeanLion, heracles));
  }
  round++;
}

const result = score(heracles, nemeanLion);
console.info(
  `${result.winner.name} has won the battle and has ${result.winner.life} points of life left. ${result.looser.name} has lost the battle.`,
);
```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```
