// prototypical inheritance by the prototype property

// let person = {
// 	name: "Geetesh",
// 	age: 19,
// };

// console.log(person);

// here the prson object has it's own prototype object
// which can be accessed by person.__proto__
// when we check for it's protype object we see
// all the methods that we can perform on the object
// prototype containes all the methods that we can perform on the object

// let's check for Array

// let arr = [1, 3, 4, 5];
// console.log(arr);

// when we check for arr.__proto__
// we will have the proto of Array that is attached to every array by inbuilt
// then if we will further check for the [[prototype]] of proto of arr we will have the same object as we find for object

// from that we link these datatypes to each other
// by prototyp chain

// let res = person.prototype === arr.__proto__.prototype;
// console.log(res); // expected true

// inheritence in objects

let person = {
	name: "Geetesh",
	age: 19,

	sayRadhe: function () {
		console.log(`${this.name} says Radhe Radhe...!`);
	},
};

let res = person.__proto__ === person.prototype;
console.log(res);

let student = {
	favSub: "Javascript",

	sayFavSub: function () {
		console.log(`My fav subject is ${this.favSub}`);
	},
};

Object.setPrototypeOf(student, person);

// inheriting functions property in object

let User = function (name, age) {
	this.name = name;
	this.age = age;

	// this is a way via which we can assign a method to an object
	// but this will also take memory storage in every object
	// this.sayName = function () {
	// 	console.log(name);
	// };
};

let user1 = new User("Geetesh", 19);
let user2 = new User("Sidd", 18);

// Now lets learn about prototypes in object

User.prototype.sayHello = function () {
	console.log(`${this.name} says Hello !!!`);
};
// classes in java script

class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.location = city;
	}

	getInfo() {
		console.log(
			`${this.name} who lives in ${this.location} is ${this.age} years old.`
		);
	}
}

class Student extends Person {
	constructor(name, age, location, stream) {
		super(name, age, location);
		this.stream = stream;
	}

	getInfo() {
		return `${this.name} who lives in ${this.location} is ${this.age} years old and now he is learning ${this.stream}.`;
	}
}

let p1 = new Person("Geetesh", 19, "Indore");
p1.getInfo();

let p2 = new Student("Geetesh", 19, "Indore", "Javascript");
let result = p2.getInfo();
console.log(result);
