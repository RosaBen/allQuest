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

# changer la taille de lettres

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

# filtrer, mapper tableau

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

# methode split, filter, test, slice, splice, reverse, join, tolowercase

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

# shortlongshort

```js
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
function solution(a, b){
return a.length>b.length? b+a+b:a+b+a
} ; //solution(1,2) returns 121

```

# Create Phone Number

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

# Detect Pangram

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

# Opposite number

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

# 

```js

```

# 

```js

```

# 

```js

```

# 

```js

```

# 

```js

```
