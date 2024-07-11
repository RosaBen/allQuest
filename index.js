//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString){
  // return the girl's correct age as an integer. Happy coding :)
  let isNumber = inputString.match(/\d+/); 
  if (isNumber){
let age = parseInt(isNumber[0],10);
if(age <= 10){
  return age;
  }else {
    return "trop agé"
  }
  }else{
    return "age non mentioné"
  }
}
 

  console.log (getAge("- years old"));