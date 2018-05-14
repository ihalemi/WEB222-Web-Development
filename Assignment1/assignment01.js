/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Ilias Halemi Student ID: 062111133 Date: 01/27/2017
*
********************************************************************************/


/*****************************
* Task 1
*****************************/
var studentName = 'Ilias Halemi';
var numberCourses = 4;
var program = 'CPA';
var job = false;
console.log("My name is " + studentName + " and I'm in " + program + " program. I'm taking " + numberCourses + " course in this semester.");

if(job == true){
    var haveJob = "have";
    
    console.log("My name is " + studentName + " and I'm in " + program + " program. I'm taking " + numberCourses + " course in this semester and I " +haveJob+ " a part-time job now.");
    
} else {
    
    haveJob = "don't have";
    
     console.log("My name is " + studentName + " and I'm in " + program + " program. I'm taking " + numberCourses + " course in this semester and I " +haveJob+ " a part-time job now.");
    
}



/*****************************
* Task 2
*****************************/
var year = 2018;
var age = prompt("Please enter your age: ");
var ageYear = year - age;

console.log("You were born in the year of " + ageYear + ".");

var study = prompt("Enter the number of years you expect to study in the college:");
var studyYear = (+year + +study);
    

console.log("You will graduate from Seneca college in the year of " +studyYear+".");


/*****************************
* Task 3
*****************************/
var c = 30;
var toF = (c * (9/5) + 32);

console.log(c+ "C is " +toF+ "F.");

var f = 80;
var toC = (f -32) * (5/9);

console.log(f+ "F is " +toC+ "C.");


/*****************************
* Task 4
*****************************/

for ( var i = 0; i <= 10; i++){
    
    if(i % 2 == 0){
        console.log(i+ " is even.");
    } else {
        console.log(i+ " is odd.")
    }
    
}



/*****************************
* Task 5
*****************************/

function largerNum (a, b) {
    var num = 0;
    
    if(a > b){
        num = a;
    } else {
        num = b;
    }
    
    return num;
}

var greaterNum = function (a, b) {
    var num = 0;
    
    if (a > b) {
        num = a;
    } else {
        num = b
    }
    
    return num;
}

// testing largerNum function
console.log("The larger number of 7 and 11 is " +largerNum(7,11)+ ".");
console.log("The larger number of 2 and 8 is " +largerNum(8,2)+ ".");

// testing greaterNum function
console.log("The larger number of 15 and 22 is " +greaterNum(15,22)+ ".");
console.log("The larger number of 9 and 3 is " +greaterNum(3,9)+ ".");


/*****************************
* Task 6
*****************************/

function Evaluator() {
    var scores = 0;
    var total = 0;
    var passFail;
    
    for (var i = 0; i < arguments.length; i++){
        scores += arguments[i];
        
    }
    
    total = ( scores / arguments.length);
    
    if (total >= 50){
        passFail = true;
    } else {
        passFail = false;
    }
    
    return passFail;
    
}

// testing Evaluator function
var student1 = Evaluator(50, 70, 90);
var student2 = Evaluator(30, 40, 20);
var student3 = Evaluator(60, 72, 57);

console.log("Average greater than or equal to 50: " +student1);
console.log("Average greater than or equal to 50: " +student2);
console.log("Average greater than or equal to 50: " +student3);


/*****************************
* Task 7
*****************************/

var Grader = function (num) {
    var grade;
    
    if (num >= 80) {
        grade = "A";
    } 
    else if (num >= 70) {
       grade = "B";    
    }
    else if (num >= 60) {
        grade = "C";
    } 
    else if (num >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    
    return grade;
}

console.log("Your grade letter is " +Grader(65)+ ".");
console.log("Your grade letter is " +Grader(95)+ ".");
console.log("Your grade letter is " +Grader(55)+ ".");


/*****************************
* Task 8
*****************************/

function showMultiples(num, numMultiples) {
    
    var total = 0;
    
    for (var i = 1; i <= numMultiples; i++) {
            total = num * i;
            console.log(num+" * "+i+ " = " +total);  
        
    }
    
}

showMultiples(5,4);
showMultiples(2,4);
showMultiples(3,2);


// END OF ASSIGNMENT


