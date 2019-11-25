//calcAge
function verify (x){
  return x > 0 ? true : false;  
}

function calcAge (ages){
   if(verify(ages)){
       return ages * 21600;
   }else {
       return "you didn/'/t put and age"
   } 
}
//end calcAge
//calc percentage of people in the class with glasses
function calcGlass (people,glasses){
   if(verify(people) && verify(glasses)){
      return (glasses / people) * 100; 
   } else {
       return "No input";
   }
}
// end
//name function
function verifyString(str){
    return str.length > 0 ? true : false;
}
function returnNames (name,lastName){
if (verifyString(name) && verifyString(lastName)){
    return "My name is : "+name+" and my last name is :" +lastName;
}else {
    return "No input dude ! ";
}

}
// end
// begin
function puissance(y,x){
 var sum = 1;
 for(i = 1;i <= x;i++){
     sum = y * sum;
 }
 return sum;
}//4 16 64
//same length of two string
function sameLength (ch , chTwo){
  return ch.length == chTwo.length ? true: false;
}
//end
//In the USA, you can learn to drive when you are 16. Write a function oldEnoughToDrive that takes an age as an argument and returns true if the person
function usaAgeDriver(age){
  check = age >=16 ? true : false;
  if(check){
      return "yes you can drive !";
  }else{
      return "you cannot drive";
  }

}
//Write a function passwordLongEnough that accepts a 'password' as a parameter and returns true if that password is long enough -- you get to decide what constitutes long enough
function passwordLongEnough(pass){
    return pass > 6 ? true : false ;
}
/*
Write a function passwordLongEnough that accepts a 'password' as a parameter and returns true if that password is long enough -- you get to decide what constitutes long enough
and returns either 'You cannot have the keys, .', or 'Have fun driving, !' depending on
whether or not the person is old enough. In the US, most rental car companies do
not allow you to rent a car until you are 21.
*/
function rentalCar (name,age){
 return age >= 21 ? "Have fun driving " + name :"You cannot have the keys :"+name ;   
}
/*
Write a function max that takes two numbers as arguments, and returns the larger one

*/
function max (a,b){
  return a > b ? a : b ;
}
/*
Write a function min that takes two numbers as arguments, and returns the smaller one
*/
function min (a,b){
  return a < b ? a : b ;
}
/*
Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
*/
function min_max (a,b){
  return a > b ? a+" "+b : b+" "+a ;
}
/*
even: returns true if its argument is even, and false if odd.
*/
function even_odd (x){
  return x % 2 === 0 ? true : false;
}
/*
 odd: the opposite of the above.
*/

function odd_even (x){
  return x % 2 === 1 ? true : false;
}
/*
positive: returns true if its argument is positive, and false if negative. 
*/
function positive (x){
  return x >= 0 ? true : false;
}
/*
negative: the opposite of the above.
*/
function negative (x){
  return x < 0 ? true : false;
}
/*
A man named 'Joe' keeps crashing his rental cars that your function rentalCar (previous module), is in charge of. The manager has decided to add him to the 'banned' list, which will never allow him to rent a car from the company again. Please update rentalCar so that he will never be able to renta again
*/
function rentalCars (name,age){
 return ((age >= 21) && (name != "joe")) ? "Have fun driving " + name :"You cannot have the keys :"+name ;   
}
/*
Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score
*/
function scoreToGrade(score) { 
 return String.fromCharCode(score);
 } 
/*
Modify the scoreToGrade function so that it returns 'INVALID SCORE' if the score is greater than 100 or less than 0
*/
function scoreToGrade(score) { 
 return ((score < 100) && (score > 0)) ? String.fromCharCode(score) : "INVALID SCORE";
} 

/*
The guessMyNumber function from the previous module (More Practice section) accepts a guess n and checks it against a random number from 0 to 5 -- if the guess n is greater than 5, output a different message indicating that the guess is out of bounds
*/
function guessMyNumber (x){
  return (Math.floor(Math.random() * 6)) == x ? "you guess the number" : "you didn't guess " ;
}
