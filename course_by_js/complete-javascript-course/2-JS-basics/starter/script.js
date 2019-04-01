/************************
*Variables and data types
*/

/*

var firstName = 'Jonh';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


// Variable naming rules

var _3years = 3;
var jonhMark = 'jonh and mark';
var if = 23;

*/

/***************************
*Variable mutation and type coercion
*/

// Type coercion
/*
var firstName = 'Jonh';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' +
			 job + '. Is he married?' + isMarried);


// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' +
			 job + '. Is he married?' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/
/***************************
* Basic operators
*/
var year,yearJonh,yearMark;
now = 2018;
ageJonh = 20;
ageMark = 33;

// Math operators
/*
yearMark = now - 33;
yearJonh = now - 28;

console.log(yearJonh);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// logical operators

var JonhOlder = ageJonh < ageMark;
console.log(JonhOlder);

//typeOf operator

console.log(typeof JonhOlder);
console.log(typeof ageJonh);
console.log(typeof ageMark);
console.log(typeof 'Mark is older than Jonh');

var x;

console.log(typeof x);
*/

/***************************
* Operator precedence
*/

var year = 2019;
var yearAliaksandr = 1993;
var fullOfAge = 25;


// Multiple operators
var isFullAge = year - yearAliaksandr >= fullOfAge;
console.log(isFullAge);


// Grouping
var ageJonh = now - yearAliaksandr;
var ageMark = 35;
var average = (ageJonh + ageMark) / 2;
console.log(average);


// Multiple assignments
var x,y;
x = y = (4 + 8) * 3 - 5; // 12 * 3 - 5 // 36 - 5 // 31
console.log(x, y);


// More operators
x *= 2;
console.log(x);

x += 10;
console.log(x);

x += 10;
x++; // or x--
console.log(x);









