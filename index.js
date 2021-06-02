//alert("Hello World");
// comments in javascript
/*
External JS
 we need a JS file
we need to link that JS file to our html. we still to need to use script tag
*/
//alert("we are using external JS")

/* 
variables
as of ES6, we do have two ways of creating a variable and also one way
for creating a constant

original method for creating variables is to use var

sytax 
var variableName;

Declaring variables with let
Introduce in 2015 for ES6

let variableName;


*/
var num;
let num2;

//assigment statment
num =9;
num2 = 10;

//variable initalization statement
let total = num + num2;

const PI = 3.14;

let name1 = "Joh'n Doe"; //will print as Joh'n Doe
let name2 = 'Joh"n Doe'; //will print as Joh"n Doe
let word1 = '"I like programming" Joh\'n said';
/* 
Escape Characters
\' single quote
\" double quote
\\ backward slash
\n new line
*/

console.log(name1);
console.log(name2);
/*console.log("PI is " + PI);


console.log("total is " + total)*/

/* 
Data type in Java script
1. String e.g. "This is a string"
A String is a sequence of characters that are enclosed in single quotes or double quotes

2. Number e.g 12/Infinity/ 2.31 In JS all numbers are floats

3. Boolean => true or false 
4. null 
5. undefined

Object eg {key:value}/ array [1,2,3,4], function

null vs undefined 
undefined has been declare but no value has been assign yet.
Also if a function doesn't explicitly return a value, then it ends up return undefined.

null this is an assigment value. This is used to represent an absence of a value. 
In JS, null means nothing
*/

let sum;
console.log(sum);

/* 
Type coercion:
The process of converting one data type to another. This can be implicitly
or explicitly

JS is a weakly-typed language

2+2 = 4
2 + '2' = "22"
'2' + 2 = "22"
'2' + '2' = '22'
'2' - 0 = 2   string dont have - so it turns into a number 
*/

/*
Functions

A function is a block of code that is design to perform a certain task
A function has a name
And a function is executed when something invoke it/

Because of ES6, we have 3 different way of declaring function in JS
1. function keyword declartion
2. fuction expression saved in varible 
3. ES6 arrow functions


The function keyword declartion
with this, a function is defined with the function keyword, follow by
the fuction name, follow by parenteses
Function name can contain letters, digits, underscores, dollar signs.
name cant start with a number

function functionName(parameter1, parameter2, parameter3...parameter4)
{
fuction code to be excuted when the fuction is called upon
}
*/
function test()
{
alert("hello lmao");
}
function getsum(num1, num2){
    return num1 + num2;
}
/*
function getsum(num1, num2){
    console.log(num1,num2);

Hoisting 
Hoisting is JS's default behavior of moving declartion to the top
When using fuction functionName(parameter){....} to declare the function, the fucntion will hoist
to the top of the script.
}*/
//to call a function. you just use the function name and the arguments  
//test();
getsum(1,43)

x= 23;
console.log("x is " + x);
var x;
/*
In JS, a varible can be declared after it has been used. 

function expression (function expression saved in a variable)

A function can be also defined using an expression
A fucntion expression can be stored into a varible.
After a function has been stored into a varible , the varible can be used as a function
 

let variableName = function (parameter) 
{
code to be excuted goes here     
};

variableName(arguments);     
*/
let getTotal = function (a,b,c) 
{
return a+b+c;    
};

let y = getTotal(1,2,3);
console.log("getTotal " +y);


/* 
arrow function 
arrow  functions is another new way of creating function. This was added in ES6.
arrow function allow us to write shorter function syntax.


Syntax for arrow function
arrowFunctionName = (parameter) => {
    code to be excuted goes here
}
 

let hello = function () {
    alert("hiii");
};

convert it into an arrow function.

solution:

*/
let hello = () => 
{
let carName = "Toyota"; //this is a local varible
alert("hiii" + carName);
}

/*global variables
varibles declared outside of any fuction have global scope

*/
//console.log("outside scope " +carName);
//hello();

/* 
Scope 

Local scope and global scope

Local JS Variables
Variables declared within a function, they are local to the function
Local variables have a function scope. Local variables can only be
access within the function where they are declared



Arrays
Arrays are uses to hold collection of data and in JS arrays can be able to hold date of different types

let arrayName = []; //this is an empty array
let arrayName1 = [value1, value2, value3,.....];
*/
let cunySchools = ["LC", "CCNY", "BCC", "Hostos", "Hunter"];

/* to access values from an array, you need the array name and an index.
arrayName[index]

to change a value 
arrayName[index] = newValue;
*/
console.log("cunySchools " +cunySchools[0]); //will print cunySchools LC
console.log("cunySchools length " +cunySchools.length);
cunySchools[0] = "Lehman College";
console.log("cunySchools " +cunySchools[0]); //will print cunySchools Lehman College
console.log("cunySchools " +cunySchools[cunySchools.length -1]);

/* 
Objects
This is a way of organizing data using key/value pairs.
Objects can contain many values
*/
const car = {make: "Toyota",
             model: "Matrix"
            };

/*
Accessing data from objects
bracket notation

objectName["key"]

dot notation
objectName.keyName
*/
//bracket notation
console.log(car['make']);

//dot notation
console.log(car.make);

/* 
Functions
Highers order Functions
A higher order fucntion is a function that operates on any other functions,
either a argument(acutal perameters) or return them.

function outerFunc(cb){
    return cb();
}

From the example above, what is the higher order function?
outerFunc. This is because it takes in cb and return the call of cb inside it.

Callback function
A callback function is any function that is passed into another function as an argument,
which is then called inside the outer function to complete some action

Callback function can be declare as functions, function expressions, or even anoymous functions

function outerFunc(cb){
    return cb();
}
what is the callback function in the above example?
cb() is the callback function and outerFunc is the higher order function    
*/

function firstFunction() {
    displayAlert("hello one");
}

function secondFunction(){
    displayAlert("hello two")
}
function displayAlert(text){
    alert(text);
}

function calculate(num1, num2, callBackFunction){
    var t = num1 + num2;
    callBackFunction(t)
}
firstFunction();
secondFunction();

calculate(1,10, displayAlert)