
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


/***************************
* Coding Challenge 1
*/

/*
var massJonh = 80; //kg
var heightJonh = 1.78; //meters

var massMark = 92;
var heightMark = 1.86;

var bmiJonh = massJonh / (heightJonh * heightJonh);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJonh, bmiMark);

var bmiMarkHigher = heightMark > heightJonh;

console.log('Is Mark\'s BMI higher than Jonh\'s' + ' - ' + bmiMarkHigher);
*/

/***************************
* if / else statements
*/

/*
var firstName = 'Jonh';
var civilStatus = 'single';

if(civilStatus === 'married'){
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)')
}


var isMarried = true;

if(isMarried){
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)')
}


var massJonh = 80; //kg
var heightJonh = 1.78; //meters

var massMark = 92;
var heightMark = 1.86;

var bmiJonh = massJonh / (heightJonh * heightJonh);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJonh, bmiMark);

var bmiMarkHigher = heightMark > heightJonh;

if (heightMark > heightJonh){
	console.log('Is Mark\'s BMI higher than Jonh\'s');
} else{
	 console.log('Is Mark\'s BMI smaller than Jonh\'s');
}

*/


/***************************
* boolean logic
*/

/*
var firstName = 'Jonh';
var age = 20;

if (age < 13){
	console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { // Beetwen 13 and 20
	console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
	console.log(firstName + ' young man');	  
} else {
	console.log(firstName + ' is a man');
}

*/

/***************************
* The ternary Operator and Switch Statements
*/

var firstName = 'Jonh';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks a beer')
: console.log(firstName + ' drinks a juice');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) { // same altarnative like above
	var drink = 'beer';
} else {
	var drink = 'juice';
} */

var job = 'driver';
switch(job){
	case 'teacher':
		console.log(firstName + ' teaches kids how to code');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber and Lisbon');
		break;
	case 'designer':
		console.log(firstName + ' beautiful websites');
		break;
	default:
		console.log(firstName + ' does something else');
}


/***************************
* Coding Challenge 2
*/

var teamJonh;
var teamMike;
var teamMary;

teamJonh = (89+120+103)/3;
teamMike = (116+94+123)/3;
teamMary = (97+134+105)/3;

console.log(teamJonh, teamMike, teamMary);

/*
if(teamJonh>teamMike && teamJonh>teamMary){
	console.log('Team Jonh\'s have highest average score');
} else if(teamMike>teamJonh && teamMike>teamMary){
	console.log('Team Mike\'s have highest average score');
} else if(teamMary>teamJonh && teamMary>teamMike){
	console.log('Team Mary\'s have highest average score');
} else {
	console.log('It\'s draw');
}
*/

teamJonh>teamMike && teamJonh>teamMary ? 
console.log('Team Jonh\'s have highest average score') : 
teamMike>teamJonh && teamMike>teamMary ? 
console.log('Team Mike\'s have highest average score') : 
teamMary>teamJonh && teamMary>teamMike ? 
console.log('Team Mary\'s have highest average score') :
console.log('It\'s draw');


/***************************
* Functions
*/

function calculateAge(birthYear){
	return 2018 - birthYear;
}

var ageJonh = calculateAge(1990);
var ageMark = calculateAge(1988);
var ageMarry = calculateAge(1993);
console.log(ageJonh,ageMark,ageMarry);


function calculateTillRetire(certainData){
	return 65 - certainData;
} 

	var retireAliaksandr = calculateTillRetire(25);
	var retireDmitrey = calculateTillRetire(47);

	console.log('Aliaksandr will go to retire through '+retireAliaksandr+' years, ', 'Dmitrey will go to retire through '+retireDmitrey+' years');


function yearsUntillRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if(retirement > 0){
		console.log(firstName + ' retires in '+
		retirement + ' years.');
	   } else {
		console.log(firstName + ' is already retired');   
	   }
	
}
	yearsUntillRetirement(1990, ' Jonh');
	yearsUntillRetirement(1988, ' Mark');
	yearsUntillRetirement(1993, ' Marry');































