// Function constructor

 

var jonh = {
	name: 'Jonh',
	yearOfBirth: 1990,
	job: 'teacher'
}

var Person = function (name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}


Person.prototype.calculateAge = function (){
		console.log(2019 - this.yearOfBirth);
};


Person.prototype.lastName = 'Smith';


var jonh = new Person('Jonh',1990,'teacher');

var jane = new Person('Jane',1978,'designer');

var mark = new Person('Mark',1955,'retired');


jonh.calculateAge();
jane.calculateAge();
mark.calculateAge();


console.log(jonh.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

