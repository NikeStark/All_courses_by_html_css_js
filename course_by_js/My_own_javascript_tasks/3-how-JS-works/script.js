

/////////////////////////////////////////
//Lecture hoisting

var x = 1; // Инициализируем x
console.log(x + " " + y);  // '1 undefined'
var y = 2;
//код выше и код ниже одинаковые

var x = 1; // Инициализируем x
var y; // Объявляем y
console.log(x + " " + y);  // '1 undefined'
y = 2; // Инициализируем y




function calculateAge(year){
	console.log(2016 - year);
}
calculateAge(16);

//or we have another way that's calls like the hoisting

calculateAge(2000); // this way work only for function declarations

function calculateAge(year){
	console.log(2019 - year);
}

//one more way function expressions
//this way doesn't work
//hoisting only with function declarations

/*retirement(2001);

var retirement = function(year){
	console.log(65 - (2016 - year));
}*/


//variables
//hoisting works with variables undefined

/*console.log(age);
var age = 23;*/

//another way which works

console.log(age);
var age = 23;

function foo(){
	console.log(age);
	var age = 65;
	console.log(age);
}
 foo();
 console.log(age);


////////////////////////////////////

//Example how's it work

var name = 'Name';

function first(){
	var a = 'Hello!';
	second();
	var x = a + name
} 

function second(){
	var b = 'Hi';
	third();
	var z = b + name;
}

function third(){
	var c = 'Hey!';
	var z = c + name;
}

first();

//First scoping example
//It works because this scoping chain has access to the variables

var a = 'Hello!';
first();

function first(){
	var b = 'Hi!';
	second();
	
	function second(){
		var c = 'Hey!';
		console.log(a + b + c);
	}
}

// Example to show difference between  execution stack and scope chain

var a = 'Hello!';
first();

function first() {
	var b = 'Hi!';
	second();
	
	function second(){
		var c = 'Hey!';
		third();
	}
}

function third(){
	var d = 'Jonh';
	//console.log(c);
	console.log(a+d);
}


///////////////////////////
//The this keyword

calculateAge(1999);

function calculateAge(year){
	console.log(2016 - year);
	console.log(this);
	
}

var jonh = {
	name: 'Jonh',
	yearOfBirth: 1990,
	calculateAge: function (){
		console.log(2019 - this.yearOfBirth);
		console.log(this); //function inside of method into object
		
		//it's still a regular function and is not method
		/*function innerFunction(){
			console.log(this);
		}
		
		innerFunction();*/
	}
}

jonh.calculateAge();


var mike = {
	name:'Mike',
	yearOfBirth: 1995
}
	mike.calculateAge = jonh.calculateAge;
	mike.calculateAge();














