/*
function sum(num1 : number , num2:number){ 
var result : number = num1 + num2 + 10;
//console.log(result);
 return result

}
var sumResult : number = sum(10 , 2);
sumResult = sumResult * 2 ;
console.log("Sum result is", sumResult);

var addResult : number = sum(30 , 20) + 10 ;
addResult = addResult + 40 ;
console.log("addResult is" , addResult);
*/
/*
calsiusToF(40)
//- Write a program by using Function to convert the temperature from Celsius to Fahrenheit and vice verse.
function calsiusToF(calsius:number){
    var toFarenhite: number= (calsius * 9 / 5) + 32 ;
    //var result : number= (Fahrenheit - 32) * 5 / 9 ;
    console.log(toFarenhite);
    
    
}
calsiusToF(16)


calsiusToF(1)

calsiusToF(32)
*/

/*
//var sumArrow=(num1:number , num2 : number):number=> (num1 +num2)*2

var sumArrow=()=> { 
    var num1:number=10;
    let num2:number=20;
    const result:number=num1+num2;
    console.log(result);
 }

sumArrow()
console.log(typeof sumArrow);
*/
/*let x= 9;
let y= 1/2 ;
console.log(x**y);*/
/*
//- Write a program that calculates the percentage.
function percentage(){
    let obtainMarks : number = 789 ;
    let totalMarks : number = 1100 ;
    let result : number = (obtainMarks / totalMarks) * 100

    return result
}
let calculated : number = percentage() ;
console.log(calculated);
*/
/*
//- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
             // solved by Function
function daysToWeeks(numOfDays : number , daysInWeeks:number){
    //let numOfDays : number = 17 ;
    //let daysInWeeks : number = 7
    let convertInToWeeks : number = Math.floor(numOfDays / daysInWeeks) ;
    let remainingDays : number = numOfDays % daysInWeeks;
  console.log(`Total Days: ${numOfDays} =  ${convertInToWeeks} weeks ${remainingDays} and Days `);
  }
  daysToWeeks(360 , 7)  
*/  
/*
                  // solved by Arrow Function
                 
  var daysToWeeks=(numOfDays : number , daysInWeeks:number)=>{
    //let numOfDays : number = 17 ;
    //let daysInWeeks : number = 7
    let convertInToWeeks : number = Math.floor(numOfDays / daysInWeeks) ;
    let remainingDays : number = numOfDays % daysInWeeks;
  console.log(`Total Days: ${numOfDays} =  ${convertInToWeeks} weeks ${remainingDays} and Days `);
  }
  daysToWeeks(360 , 7)
*/

// -Write a TypeScript function that takes an array of numbers as input and returns the sum of all the even numbers in the array.
/* 
function sumAll(allNum:number[]) {
  let sum = 0 ;
  //var addNum = [10 , 20, 30 , 42 , 51 , 31]  let , const is not assible out of function
  for(const addNum of allNum ){
     if(addNum % 2 != 0){
      sum += addNum
     }
    
  }
  return sum ;
}
let addNum = [10 , 20, 30 , 42 , 51 , 31]
let result = sumAll(addNum)
console.log(result);
*/
/*
function sumEven(num1:number[]):number {
  let sum = 0 ;
 for(const allNumbers of num1) {
  if(allNumbers % 2 === 0 ){
    sum += allNumbers
  }
 }
 return sum;
}
  let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 100 ]
  let result : number  = sumEven(allNumbers)      
console.log(result);

*/
/*
// -Write a TypeScript function that takes a string as input and returns the reverse of the string. 
function reverseString(userName : string):string{
  let reversed = '' ;

  for (let i = input.length - 1; i >= 0 ; i-- ){
    
    reversed += input[i] ;
  }

  return reversed ;
}
const reverseConst = "Hello , World!"
const result = reverseString(reverseConst)
console.log(result);
/*

function reverseString(input: string): string {
  let reversed = '';
  
  for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
  }
  
  return reversed;
}

const inputString = "Hello, World!";
const reversedResult = reverseString(inputString);
console.log("Reversed string:", reversedResult);

*/
