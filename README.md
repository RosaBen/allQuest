# README

## create server

```js
const http = require("node:http");
const app = http.createServer();

const handleRequest = (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Hello World!");
  } else if (req.url === "/about") {
    res.end("About World!");
  } else {
    res.end("Not Found");
  }
};
app.on("request", handleRequest);

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## calcul simple

```js
/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  const thirdAngle = 180 - a - b;
  return thirdAngle;
}

console.log(thirdAngle(10, 20));

module.exports = thirdAngle;
```

## division avec modulo

```js
/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2024));
```

## changer la taille de lettres

```js
// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed
const people = [
  "JoHn",
  "ChrISTiana",
  "anThoNY",
  "MARia",
  "jaMeS",
  "MIChaEl",
  "jeNNIFeR",
];

// transformer un nom avec majuscule sur 1ère lettre et minuscule sur les autres
function refactorName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// mapper le tableau people avec callback qui réfère à la fonction refactorName
function refactorPeople(people, callback) {
  return people.map(callback);
}
console.log(refactorPeople(people, refactorName));
```

## filtrer, mapper tableau

### exemple 1

```js
const instructors = [
  {
    name: "John",
    availability: "all",
    specialities: ["Javascript", "Python", "C++"],
  },
  {
    name: "Mary",
    availability: "weekend",
    specialities: ["Javascript", "Ruby", "C++"],
  },
  {
    name: "Chris",
    availability: "evenings",
    specialities: ["Javascript"],
  },
  {
    name: "Anthony",
    availability: "all",
    specialities: ["Python", "Ruby"],
  },
  {
    name: "Pauline",
    availability: "only Mondays",
    specialities: ["Javascript", "Html", "CSS"],
  },
  {
    name: "Mark",
    availability: "all",
    specialities: ["C#", "C++", "Javascript"],
  },
  {
    name: "Helen",
    availability: "evenings",
    specialities: ["Python", "C++"],
  },
  {
    name: "Charles",
    availability: "none",
    specialities: ["Python"],
  },
];

// PART 1// Given an array with different objects inside that contain an instructor profile with his/her name, the availability and the specialities, you need to create a new array that contains only instructors that know about Javascript and available on the weekend. Keep in mind that if their availability is all, it means that they are also available on the weekend, so they need to be included too
// filtrer le tableau pour récupérer les instructeurs disponible le weekend et leur specialitées
const weekendInstructors = [];
const searchInstrustors = instructors.filter((instructor) => {
  if (
    (instructor.availability === "all" ||
      instructor.availability === "weekend") &&
    instructor.specialities.includes("Javascript")
  ) {
    weekendInstructors.push({
      name: instructor.name,
      specialities: instructor.specialities,
    });
  }
});
console.log(weekendInstructors);

// PART 2
// Iterate over that new array of instructors available and show a message per instructor saying:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class
// envoyer un message à chaque instructeur disponible
//  const messageInstructors = weekendInstructors.map(instructor => `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`);
//  console.log(messageInstructors);

// PART 3
// Modify the previous message checking that if an instructor also knows about Python, the message needs to be:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop
// envoyer un message different si instructeur connait aussi python

const messageInstructors2 = weekendInstructors.map((instructor) => {
  if (instructor.specialities.includes("Python")) {
    return `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`;
  } else {
    return `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`;
  }
});
console.log(messageInstructors2);
```

### exemple 2

```js
/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des devs web seniors
- Le second ne contient que des data analysts seniors
(Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)*/

const persons = [
  { name: "Mary", experience: 2, job: "web dev" },
  { name: "Tony", experience: 6, job: "data analyst" },
  { name: "John", experience: 2, job: "data analyst" },
  { name: "Jane", experience: 6, job: "web dev" },
  { name: "Maggie", experience: 2, job: "web dev" },
  { name: "Leonardo", experience: 2, job: "data analyst" },
  { name: "Carla", experience: 4, job: "data analyst" },
  { name: "Mickael", experience: 7, job: "web dev" },
  { name: "Penelope", experience: 7, job: "web dev" },
  { name: "Homer", experience: 5, job: "data analyst" },
  { name: "Leonardo", experience: 2, job: "data analyst" },
  { name: "Carla", experience: 4, job: "web dev" },
  { name: "Lisa", experience: 3, job: "web dev" },
  { name: "Millie", experience: 5, job: "data analyst" },
  { name: "Penelope", experience: 7, job: "web dev" },
];

function findSeniors(persons) {
  const seniorDev = persons.filter(
    (person) => person.experience >= 5 && person.job === "web dev",
  );

  console.log(seniorDev);
  seniorAnalyst = persons.filter(
    (person) => person.experience >= 5 && person.job === "data analyst",
  );

  console.log(seniorAnalyst);
  return [seniorDev, seniorAnalyst];
}

console.log(findSeniors(persons));
```

## methode split, filter, test, slice, splice, reverse, join, tolowercase

```js
const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
// console.log('step 0 : ',  mysteriousString);

// step1 : split the myserious string it into an array, so that each letter becomes an item (the separator should be an empty string).
// tolowercase = mettre en minuscule;
// split = séparer;
// filter=filtrer;
// test= vérifie le caractère correspond à la condition (ici alphabet de a à z)
const step1 = mysteriousString
  .toLowerCase()
  .split("")
  .filter((character) => /[a-z]/.test(character));
// const s2 = step1.split("");
// const alphabet = s2.filter(character=>/[a-z]/.test(character))
// console.log('step1 : ', step1);

// step2 : get a slice of the array : take elements from the 15th included to the 32nd excluded (remember indexes start at 0 !)
// slice = couper à partir de index n à index n1=> récupérer la partie coupé
const step2 = step1.slice(14, 31);
console.log("step 2 : ", step2);

// step3 : Splice the array to replace 2 elements from index 5 with only one element : the letter 't'
// slice()= permet faire copie afin de récupérer tous les éléments de l'array précédent
// splice = a partir d'un index,  retire (optionel =0), ajoute "string ou caractère"
const step3 = step2.slice(); // making a copy of the array
step3.splice(5, 2, "t", "v");
// console.log('step 3 : ', step3);

// step4 : reverse the array
// reverse = inverser ordre du tableau
const step4 = step3.reverse(step3);
// console.log('step 4 : ', step4);

// step5 : each element of the array back into a string (the separator should be an empty string)
// join = transform element de tableau en string en utilisant ou nom un séparateur
const step5 = step4.join(" ");
// console.log('step 5 : ', step5);
```

## shortlongshort

```js
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
function solution(a, b) {
  return a.length > b.length ? b + a + b : a + b + a;
} //solution(1,2) returns 121
```

## Create Phone Number

```js
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers) {
  const first = [];
  const second = [];
  const third = [];
  for (let i = 0; i < 3; i++) {
    first.push(numbers[i]);
  }
  for (let i = 3; i < 6; i++) {
    second.push(numbers[i]);
  }
  for (let i = 6; i < 10; i++) {
    third.push(numbers[i]);
  }
  return `(${first.join("")}) ${second.join("")}-${third.join("")}`;
} // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) returns (123) 456-7890")
```

## Detect Pangram

```js
//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseString = string.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (lowerCaseString.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
} // isPangram("The quick brown fox jumps over the lazy dog") returns true
```

## Opposite number

```js
//Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
function opposite(number) {
  if (number < 0) {
    return number * -1;
  } else {
    return number * -1;
  }
} // opposite (-55) returns 55
```

## Parse nice int from char problem

```js
//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  // recupère tous les chiffres avec match(/\d+/)
  // recupère premiers chiffres avec match(/\d/) => de 0 à 9
  let isNumber = inputString.match(/\d+/);
  if (isNumber) {
    // parsInt convertit le string en nombre
    let age = parseInt(isNumber[0], 10);
    if (age <= 10) {
      return age;
    } else {
      return "trop agé";
    }
  } else {
    return "age non mentioné";
  }
} // getAge(25 years old) returns "trop agé"
```

## tableaux imbriquées

```js
/*
Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
Dans la salle les places sont réparties comme suit :
   - Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
   - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

Complète la fonction theaterSieges pour qu'elle renvoie un tableau
où chaque sous-tableau répertorie les positions des sièges dans une rangée.

exemple du résultat final :

[
  ["1-1", "1-2", "1-3", ..., "1-100"],
  ["2-1", "2-2", "2-3", ..., "2-100"],
  ...
  ["26-1", "26-2", "26-3", ..., "26-100"]
]
*/

function theaterSieges() {
  const colonnes = 26;
  const sieges = 100;
  const theater = [];
  for (let i = 1; i <= colonnes; i++) {
    const rangee = [];
    for (let ii = 1; ii <= sieges; ii++) {
      rangee.push(`${i}-${ii}`);
    }
    theater.push(rangee);
  }
  console.log(theater);
  return theater;
}

theaterSieges();
```

## utilisation de split

```js
/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.

["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/

function getPoints(results) {
  const victory = 3;
  const nullPoints = 1;
  const lose = 0;
  const myTeam = 0;
  const adversary = 0;
  let result = 0;

  for (let index = 0; index < results.length; index++) {
    let [myTeam, adversary] = results[index].split(":");
    // console.log(myTeam, adversary)
    if (myTeam > adversary) {
      result = result + victory;
    } else if (myTeam === adversary) {
      result = result + nullPoints;
    }
    console.log(result);
  }
  return [result];
}

console.log(
  getPoints([
    "1:0",
    "2:0",
    "3:0",
    "4:4",
    "2:2",
    "3:3",
    "1:4",
    "2:3",
    "2:4",
    "3:3",
  ]),
);
```

## addition entre 2 tableaux

```js
/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA, arrayB) {
  let arrayANumber = arrayA.map(Number);
  let arrayBNumber = arrayB.map(Number);
  console.log(arrayANumber, arrayBNumber);
  let result = [];

  while (arrayANumber.length > arrayBNumber.length) {
    arrayBNumber.push(0);
  }
  while (arrayANumber.length < arrayBNumber.length) {
    arrayANumber.push(0);
  }
  console.log(arrayANumber, arrayBNumber);

  for (let index = 0; index < arrayANumber.length; index++) {
    let sumArrays = arrayANumber[index] + arrayBNumber[index];
    result.push(sumArrays.toString());
  }
  console.log(result);
  return result;
}

sumArr(["2", "5", "3"], ["2", "4", "9", "5", "5"]);
```

## tableau en ordre croissant?

```js
function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(inAscOrder([1, 2, 4, 7, 19])); // true
console.log(inAscOrder([1, 2, 3, 4, 5])); // true
console.log(inAscOrder([1, 6, 10, 18, 22, 34, 120])); // false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // false
```

## cooking time

```js
function cookingTime(eggs) {
  // we have only one pot, how many minutes to cook all the eggs.
  const nbEggsPerPot = 8;
  const cookingTimerPerPot = 5;

  return Math.ceil(eggs / nbEggsPerPot) * cookingTimerPerPot;
}

console.log(cookingTime(1000));
```

## sort odd numbers in array and keep event numbers in place without sorting

```js
function sortArray(array) {
  // recupérer les nombres impairs
  const oddNumbers = array.filter((number) => number % 2 !== 0);
  // trier les nombres impairs
  const sortedOddNumbers = oddNumbers.sort((a, b) => a - b);
  // retourner le tableau initial avec les nombres impairs triés
  return array.map((number) =>
    number % 2 !== 0 ? sortedOddNumbers.shift() : number,
  );
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4];
```

## Find the position

```js
/*
When provided with a letter, return its position in the alphabet.
Input :: "a"
Output :: "Position of alphabet: 1"
Note: Only lowercased English letters are tested
*/

function position(letter) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}
```

## Double Char

```js
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/
function doubleChar(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    return result;
}

```

## duplicateChar

```js
/*
Given a string with duplicate Char, you have to return a string in which each character (case-sensitive) is repeated once.
*/
function doubleChar(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i - 1] || i === 0) {
            result += str[i];
        }
    }

    return result;
}
```

## Calculate BMI

```js

/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

```

## Multiply the number

```js
/*Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/
function multiply(number) {
    let base = 5;
    const numberString = number.toString().split('');
    let exponent = numberString.length;

    if (number > 0) {
        let result = Math.pow(base, exponent) * number;
        return result;
    } else {
        let result = Math.pow(base, exponent - 1) * number;
        return result;
    }
}
```

## Convert a string to an array

```js
/*Write a function to split a string and convert it into an array of words.
*/
function stringToArray(string) {
    return string.split(" ");

}

```

## If you can't sleep, just count sheep

```js
/*Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
function countSheep(num) {
    if (num < 0) {
        return "not a valid number";
    } else {
        let result = "";
        for (let i = 1; i <= num; i++) {
            result += i + " sheep...";
        }
        return result;
    }
}

```

## Rock Paper Scissors

```js
/*Let's play! You have to return which player won! In case of a draw return Draw!.
*/
function rps(p1, p2) {
    if (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
        return "Player 1 won!";
    } else if (p1 === p2) {
        return "Draw!";
    }
    else {
        return "Player 2 won!";
    }
}


```

## Count by X

```js
/*   Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).   
*/

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }

    return z;
}

```

## Will you make it?

```js
/*  You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    if (distanceToPump <= mpg * fuelLeft) {
        return true
    } else {
        return false;
    };
}

```

## Reversed sequence

```js
/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]     
*/
function reverseSeq(n) {
    let result = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    };
    return result;
}
```

## Count Odd Numbers below n

```js
/* Given a number n, return the number of positive odd numbers below n, EASY!     
*/
function oddCount(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr.length;
}

```

## Type of sum

```js
/*   Return the type of the sum of the two arguments   
*/
function typeOfSum(a, b) {
    let sum = a + b;
    if (typeof sum === 'number') {
        return 'number';
    } else if (typeof sum === 'string') {
        return 'string';
    }
    else {
        return 'NaN';
    }
}

```

## Geometry Basics: Distance between points in 2D

```js
/*    Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/
function distanceBetweenPoints(a, b) {
    // vérifier si les points sont dans la plage x >= -50 et y <= 50  
    if (a.x >= -50 && b.x >= -50 && a.y <= 50 && b.y <= 50) {
        // calculer la distance entre les deux points par axes
        let distanceX = a.x - b.x;
        let distanceY = a.y - b.y;

        // formule de distance euclidienne pour obtenir la distance.
        // calcul du carré pour chaque point et chaque axe afin de mettre en positif (Math.pow(base, exposant))on multiplie la distance par elle même 
        let distanceXSquare = Math.pow(distanceX, 2);
        let distanceYSquare = Math.pow(distanceY, 2);
        // calcul de la distance entre les deux points avec la racine carrée
        let distance = Math.sqrt(distanceXSquare + distanceYSquare);
        return distance;

    } else {
        return 'Les points ne sont pas dans la plage x >= -50 et y <= 50';
    }

}
```

OU

```js
/*    Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/
function distanceBetweenPoints(a, b) {
    // vérifier si les points sont dans la plage x >= -50 et y <= 50  
    if (a.x >= -50 && b.x >= -50 && a.y <= 50 && b.y <= 50) {
        // calculer la distance entre les deux points par axes
        let distanceX = a.x - b.x;
        let distanceY = a.y - b.y;
        // calcul de la distance entre les deux points avec exponentiation
        let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);;
        return distance;

    } else {
        return 'Les points ne sont pas dans la plage x >= -50 et y <= 50';
    }

}
```

## Count words

```js
/*   Can you implement a function that will return number of words in a string?
You have to ensure that spaces in string is a whitespace for real.   
*/
function countWords(str) {
    // si le string est vide, retourner 0
    if (str === "") {
        return 0;
    }
    // remplacer les caractères spéciaux et chiffres par des espaces tout en gardant les lettres minusculs et majuscules
    str = str.replace(/[^a-zA-Z ]/g, " ").trim();
    // Transformer en tableau
    str = str.split(" ");
    // filtrer les éléments vides
    str = str.filter((word) => word !== "");
    console.log(str);
    return str.length;
}

```

## Are there any arrows left?

```js
/*   You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.

The expected result is a boolean, indicating whether you have any good arrows left.   
*/

function anyArrows(arrows) {
    const result = arrows.map(arrow => {
        // vérifier chaque arrow si elle est endommagée ou non
        if (arrow.damaged === true) {
            return false;
        } else {
            return true;
        }
    })
    // vérifier si au moins une flèche n'est pas endommagée
    return result.includes(true);
}
```

## Polish alphabet

```js
/*      
*/

```

## t458

```js
/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"     
*/
function correctPolishLetters(string) {
    return string.replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z');
}
```

## Keep Hydrated

```js
/*   Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5   
*/
function litres(time) {
    // nb de litres par temps arrondi à l'entier inférieur
    return Math.floor(time * 0.5);
}
```

## arrosez le jardin après la pluie?

```js
/*   verifier si plante à besoin d'eau supplémentaire après la pluie 
*/
function rainAmount(mm) {
    if (mm < 40) {
        return "You need to give your plant " + (40 - mm) + " mm of water"
    }
    else {
        return "Your plant has had more than enough water for today!"
    };
}
```

## Miles per gallon to kilometers per liter

```js
/*   Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres   
*/
function converter(mpg) {
    const nbKmPermiles = 1.609344;
    const nbLitresPerGallon = 4.54609188;
    // calculer le nombre de km parcourus par gallon
    const nbKmPerGallon = nbKmPermiles * mpg;
    // calculer le nombre de litres consommés par km
    const kpl = nbKmPerGallon / nbLitresPerGallon;
    // arrondir à 2 chiffres après la virgule
    return parseFloat(kpl.toFixed(2));

}
```

## Blood-Alcohol Content

```js
/*  Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

BAC calculator Formula:

BAC% = (A × 5.14 / W × r) - .015 × H 

A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours    
*/
function bloodAlcoholContent(drinks, weight, sex, time) {
    // calculer le nb d'alcool dans le sang
    const alcohol = drinks.ounces * drinks.abv;
    const ratioFemale = 0.66;
    const ratioMale = 0.73;
    if (sex === "female") {
        // calculer le taux d'alcool dans le sang pour une femme
        const bac = (alcohol * 5.14 / weight * ratioFemale) - 0.015 * time;
        return parseFloat(bac.toFixed(4));
    } else {
        // calculer le taux d'alcool dans le sang pour un homme
        const bac = (alcohol * 5.14 / weight * ratioMale) - 0.015 * time;
        // arrondir à 4 chiffres après la virgule
        return parseFloat(bac.toFixed(4));
    }
}
```

## Training JS #16: Methods of String object--slice(), substring() and substr()

```js
/*     Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work. 
*/
function cutIt(arr) {
    //    récupérer la longueur minimale des élements de la liste
    const minLength = Math.min(...arr.map(e => e.length));
    //   couper chaque élément de la liste à la longueur minimale
    return arr.map(e => e.slice(0, minLength));

}

```

## t454

```js
/*      
*/

```

## t455

```js
/*      
*/

```

## t456

```js
/*      
*/

```

## t457

```js
/*      
*/

```

## t458

```js
/*      
*/

```

## t459

```js
/*      
*/

```
