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
const thirdAngle = 180-a-b; 
return thirdAngle;
}

console.log(thirdAngle(10,20));

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
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
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
const weekendInstructors=[];
const searchInstrustors = instructors.filter((instructor)=>{
  if((instructor.availability === "all" || instructor.availability === "weekend") && (instructor.specialities.includes("Javascript"))){
    weekendInstructors.push({name:instructor.name, specialities:instructor.specialities});
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

 const messageInstructors2 = weekendInstructors.map(instructor => {
  if (instructor.specialities.includes("Python")){
    return `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`
  }else {
    return `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`
  }
 }

 );
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
    { name: 'Mary', experience: 2, job: 'web dev' },
    { name: 'Tony', experience: 6, job: 'data analyst' },
    { name: 'John', experience: 2, job: 'data analyst' },
    { name: 'Jane', experience: 6, job: 'web dev' },
    { name: 'Maggie', experience: 2, job: 'web dev' },
    { name: 'Leonardo', experience: 2, job: 'data analyst' },
    { name: 'Carla', experience: 4, job: 'data analyst' },
    { name: 'Mickael', experience: 7, job: 'web dev' },
    { name: 'Penelope', experience: 7, job: 'web dev' },
    { name: 'Homer', experience: 5, job: 'data analyst' },
    { name: 'Leonardo', experience: 2, job: 'data analyst' },
    { name: 'Carla', experience: 4, job: 'web dev' },
    { name: 'Lisa', experience: 3, job: 'web dev' },
    { name: 'Millie', experience: 5, job: 'data analyst' },
    { name: 'Penelope', experience: 7, job: 'web dev' },
  ];
  
  
  function findSeniors(persons) {
  const  seniorDev = persons.filter(
      (person)=>person.experience >=5 && person.job === "web dev"
    )
  
    console.log(seniorDev)
    seniorAnalyst=persons.filter((person)=> person.experience >=5 && person.job === "data analyst");
  
  console.log(seniorAnalyst)
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
const step1 = mysteriousString.toLowerCase().split("").filter(character=>/[a-z]/.test(character));
// const s2 = step1.split("");
// const alphabet = s2.filter(character=>/[a-z]/.test(character))
// console.log('step1 : ', step1);

// step2 : get a slice of the array : take elements from the 15th included to the 32nd excluded (remember indexes start at 0 !)
// slice = couper à partir de index n à index n1=> récupérer la partie coupé
const step2 = step1.slice(14,31);
console.log('step 2 : ', step2);

// step3 : Splice the array to replace 2 elements from index 5 with only one element : the letter 't'
// slice()= permet faire copie afin de récupérer tous les éléments de l'array précédent
// splice = a partir d'un index,  retire (optionel =0), ajoute "string ou caractère"
const step3 = step2.slice(); // making a copy of the array
step3.splice(5,2,"t", "v");
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
function solution(a, b){
return a.length>b.length? b+a+b:a+b+a
} ; //solution(1,2) returns 121

```

## Create Phone Number

```js
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
const first = [];
const second = [];
const third = [];
for(let i = 0; i < 3; i++){
    first.push(numbers[i]);
}
for (let i = 3; i < 6; i++){
    second.push(numbers[i]);}
for(let i = 6; i < 10; i++){
    third.push(numbers[i]);
}
return `(${first.join('')}) ${second.join('')}-${third.join('')}`;
}; // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) returns (123) 456-7890")
```

## Detect Pangram

```js
//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseString = string.toLowerCase();
  for (let i=0; i<alphabet.length;i++){
    if(lowerCaseString.indexOf(alphabet[i]) === -1){
      return false;
    }
  }
  return true;
}; // isPangram("The quick brown fox jumps over the lazy dog") returns true

```

## Opposite number

```js

//Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
function opposite(number) {
  if(number<0){
    return number * (-1);
  } else {
    return number * (-1);
  }
}; // opposite (-55) returns 55
```

## Parse nice int from char problem

```js
//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString){
  // return the girl's correct age as an integer. Happy coding :)
  // recupère tous les chiffres avec match(/\d+/)
  // recupère premiers chiffres avec match(/\d/) => de 0 à 9
  let isNumber = inputString.match(/\d+/); 
  if (isNumber){
    // parsInt convertit le string en nombre
let age = parseInt(isNumber[0],10);
if(age <= 10){
  return age;
  }else {
    return "trop agé"
  }
  }else{
    return "age non mentioné"
  }
}; // getAge(25 years old) returns "trop agé"

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
  const sieges= 100;
  const theater=[];
   for (let i=1; i<= colonnes;i++){
    const rangee =[];
    for (let ii=1; ii<=sieges; ii++){
        rangee.push(`${i}-${ii}`)
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
    const myTeam =0;
    const adversary=0;
    let result=0;

    for (let index = 0; index < results.length; index++) {
        let [myTeam, adversary] = results[index].split(":");
        // console.log(myTeam, adversary)
        if(myTeam > adversary){
            result = result+victory;
        } else if(myTeam === adversary){
            result = result +nullPoints;
        } 
        console.log(result);
    } return [result];

  }

console.log(getPoints(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]))

```

##  addition entre 2 tableaux

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
while (arrayANumber.length < arrayBNumber.length){
        arrayANumber.push(0);
}
console.log(arrayANumber, arrayBNumber);

for (let index = 0; index < arrayANumber.length; index++) {
    let sumArrays =arrayANumber[index] + arrayBNumber[index];
    result.push(sumArrays);
    
}
console.log(result);
return result;
}

  sumArr(["2", "5", "3"], ["2", "4", "9", "5", "5"] );

```

## t4

```js

```

## t45

```js

```

## t455

```js

```
