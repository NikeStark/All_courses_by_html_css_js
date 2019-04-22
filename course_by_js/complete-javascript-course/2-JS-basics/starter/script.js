
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
	yearsUntillRetirement(1950, ' Mark');
	yearsUntillRetirement(1980, ' Marry');


/***************************
* Function statements and expressions
*/

//Function declaration 
//function whatDoYouDo(job, firstName){ }

//Function expression

var whatDoYouDo = function (job, firstName){
	switch(job){
		case 'teacher':
			return firstName+' teaches kids how to code';
		case 'driver':
			return firstName+' drivers a cab in Lisbon';
		case 'designer':
			return firstName+' designs beautiful websites';
		default:
			return firstName+' does something else';
	}
}

console.log (whatDoYouDo('driver', 'Mark'));
console.log (whatDoYouDo('designer', 'Jonh'));
console.log (whatDoYouDo('doctor', 'Sara'));
console.log (whatDoYouDo('teacher', 'Marry'));


/***************************
* Arrays
*/

// Initialize new data
var names = ['Jonh','Mark','Jane'];
var years = new Array(1969,1978,1977);

console.log(names[2]);
console.log(names.length);


// Mutate array data
names[1] = 'Wolter';
names[names.length] = 'Stiv';
console.log(names);


//Different data types

var jonh = ['Jonh','Smith',1993,'Teacher',false];

jonh.push('blue'); //after add
jonh.unshift('Mr.'); //before add
console.log(jonh);

jonh.pop(); //remove last
jonh.pop();
jonh.shift(); //remove first
console.log(jonh);

console.log(jonh.indexOf(56));

var isDesigner = jonh.indexOf('Designer') === -1 ?
	'Jonh is NOT a designer':'Jonh is a designer';
console.log(isDesigner);


/***************************
* Coding Challenge 3
*/

function tipCalculator(bill){
	var percantage;
	if(bill<50){
		percantage=.2;
	} else if (bill>=50 && bill<200){
		percantage=.15;
	} else if (bill>200){
		percantage=.1;
	} 
	return bill*percantage;
}

	bills = [124,48,268];
	console.log(tipCalculator(bills[0]),
			   	tipCalculator(bills[1]),
			   	tipCalculator(bills[2]));
	
	console.log(bills[0]+tipCalculator(bills[0])+" , ",
			   	bills[1]+tipCalculator(bills[1])+" , ",
			   	bills[2]+tipCalculator(bills[2])+".");

	bills[0]>bills[1] && bills[0]>bills[2] ?
		console.log("The biggest tip was in the first restaurant") :
	bills[1]>bills[0] && bills[1]>bills[2] ?
		console.log("The biggest tip was in the second restaurant") :
	bills[2]>bills[0] && bills[2]>bills[1] ?
		console.log("The biggest tip was in the third restaurant"):
		console.log("Nowhere");

	



// less 50$ = 20%
// 50$ - 200$ = 15%	
// more 200$ = 10%

var browser = prompt("Enter your browser: ", "");
if (browser === "IE") {
alert( 'О, да у вас IE!' );
} else if (browser === "Chrome"||browser === "Opera"||browser === "Firefox"||browser === "Safari") {
alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
alert( 'Мы надеемся, что и в вашем браузере все ок!' );
	   } 
			 

	var password = prompt("Please, enter you password:");
	if(password==="131093"){
	alert("You entered your password right!");
} else if (password != "131093"){
	prompt("Try to enter your paswword again");
} else if(password==="131093"){
	alert("You entered your password right!");
} 
		
		
/***************************
* Objects and properties
*/


//Object literal
var jonh = {
	firstName: 'Jonh',
	lastName: 'Smith',
	birthYear: 1993,
	family: ['Jane','Mark','Bob','Emily'],
	job: 'driver',
	isMarried: false
};

console.log(jonh.family);
console.log(jonh['lastName']);

var x = 'birthYear';
console.log(jonh[x]);

jonh.job = 'designer';
jonh['isMarried'] = true;

console.log(jonh);

//new Object syntax

var jane = new Object();
jane.firstName = 'Jane';
jane['lastName']='Smith';
jane.birthYear = 1995;
jane.job = 'Chef';
jane.family = ['Robbert','Sam','Waller'];

console.log(jane);

/***************************
* Objects and methods
*/

var jonh = {
	firstName: 'Jonh',
	lastName: 'Smith',
	birthYear: 1993,
	family: ['Jane','Mark','Bob','Emily'],
	job: 'driver',
	isMarried: false,
	calcAge: function(){
		return 2018 - this.birthYear;
	}
};
	console.log(jonh.calcAge(1990));
	
	var Mark = new Object();
	Mark.firstName = 'Mark';
	Mark.lastName = 'Smith';
	Mark.birthYear = 1993;
	Mark.calcAge = function(birthYear){
		return 2018 - birthYear;
	};
	Mark.calcAge = function(){
		this.age = 2018 - this.birthYear;
	};
	
	Mark.calcAge();
	console.log(Mark);
	console.log(Mark.calcAge(2000));


/***************************
* Coding Challenge 4
*/ 

var Jonh = {
	fullName: 'Jonh',
	massJonh: 94,
	heightJonh: 1.88,
	calcBmiJonh: function(){
		return this.massJonh / (this.heightJonh*this.heightJonh);
	}
};
	
var Mark = new Object();
	Mark.fullName = 'Mark';
	Mark.massMark = 92;
	Mark.heightMark = 1.86;
	Mark.calcBmiMark = function(){
		return this.massMark / (this.heightMark*this.heightMark);
	}
	
		console.log('bmiJonh = ' + Jonh.calcBmiJonh()+' ; '+
				'bmiMark = '+Mark.calcBmiMark());
	
	var highBMI = Jonh.calcBmiJonh() > Mark.calcBmiMark();

	
	console.log('Is Mark\'s BMI higher than Jonh\'s' + ' - ' + highBMI);


 

