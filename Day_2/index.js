// today we will see what is truthy and falsy values are :-

// falsy value - undefined null false NaN 0 "" are 6 falsy values
// instead of all these 6 values everything is truthy in js

let a1 = null;

if (a1) {
	console.log(`${a1} is Truthy.`);
} else {
	console.log(`${a1} is Falsey.`);
}

// null is Falsey.

// 1
// ""
// "null"
// "0"
// []
// {}

// coercion technique

// Put a + Mathematical operator in front of a number & it will convert value to a number automatically.
// If the string represents a non number, NaN is returned.

console.log(+"1245"); // returns a number
console.log(+"hbs268334"); // return NaN

// Ternary Operator

// syntax :- condition ? if true execute stmnt1 : otherwise this ;
// eg.

let age = 19;
let res = age > 18 ? "You are eligible" : "You are not eligible";
console.log(res);

// Logical Operator

// OR operator returns first trythy value that it finds and stop moving further

// let a = false;
// let b = 0;
// let c = null;

// let z = a || b || c;

// console.log(z);
// expected null

// let a = false;
// let b = "Vivek";
// let c = "Rishi";

// let z = a || b || c;

// console.log(z);
// expected Vivek

let defaultUser = "Anonymous";
let user1 = "Geetesh";
console.log(user1 || defaultUser);

// && (AND) operator returnds false if it finds any single falsy value

let a = "Prachi";
let b = "Vivek";
let c = "Rishi";

let z = a && b && c;

console.log(z);
// exppected Rishi bcz when it will not find any falsy value it will return the last truthy value

let bankbalance = 100;
let accountactive = true;

bankbalance > 0 && accountactive && console.log("active");
// not return anything
// I am wrong becouse first it will check first stm which is true then it will check for 2nd stm which is
// also true then it will simply console log "Active"

let bankbalance2 = 100;
let accountactive2 = false;

bankbalance > 0 && accountactive2 && console.log("not active");
// here it'll not return anything

// Nullish coalescing operator '??'
// this opertor returns 2nd value when first value is either null or undefined

let _user;
console.log(_user ?? "Anonymous");

// ------------------------------------------LOOPS---------------------------------------------------

// 1.Do...while

let i = 0; // external loop counter

do {
	if (i % 2 !== 0) {
		console.log(i);
	} // Statement executed at least once
	i++; // increment expression
} while (i <= 10); // condition expression

// let x = 0;
// do {
// 	if (x % 2 == 0) {
// 		console.log(x);
// 	}
// 	x++;
// } while (x < 50);

// 2.For - in loops

const student = {
	firstName: "Vivek",
	rank: 1,
	age: 36,
};

for (let key in student) {
	console.log(key); // will return keyNames
	console.log(student[key]); // will return values of those keys
}

const subjects = ["javascript", "html", "css"];

for (let index in subjects) {
	console.log(index); // return index
	console.log(subjects[index]); // return elements
}

//3.For-of loops

const subjects2 = ["javascript", "html", "css"];

for (let subject of subjects2) {
	if (subject == "javascript") {
		console.log("You are learning frontend technoloogies");
	}
}

//----------------------------------------Arrorw Function---------------------------------------

// Arrow functions

// Regular function
function greet(greeting, name) {
	return `${greeting}, from ${name}`;
}

let res1 = greet("Hello", "Geetesh");
console.log(res1);

// Arrow function
// let newGreet = (greeting, name) => {
// 	return `${greeting}, from ${name}`;
// };

// let res2 = newGreet("Hello", "Aveer");
// console.log(res2);

// implicit return: If all you have is a single expression that returns a value,
// you can get rid of the braces and the return keyword. Its a very common usage.

let newGreet = (greeting, name) => `${greeting}, from ${name}`;
let res3 = newGreet("Hello", "Aveer");
console.log(res3);

// implicitly returning an object

const userData = () => ({
	name: "Vivek",
	email: "vivek@example.com",
});

console.log(userData()); // {name: 'Vivek', email: 'vivek@example.com'}

//--------------------------let vs var vs const--------------------------

function scopeTest() {
	var outerVar = "outer var";
	let outerLet = "outer let";

	if (true) {
		var innerVar = "inner var"; // function scoped
		let innerLet = "inner let"; // block scoped
	}

	console.log(innerVar); // inner var
	//console.log(innerLet); // Uncaught ReferenceError: innerLet is not defined
}

scopeTest();

const name = "Vivek";
// name = "Akash"; // Uncaught TypeError: Assignment to constant variable.

const uniqueUser = {
	name,
};

uniqueUser.name = "Akash"; // this is called mutating not re-assigning a variable
console.log(uniqueUser); // {name: 'Akash'}

const users = ["a", "b", "c"];
users.push("d");
console.log(users); // ['a', 'b', 'c', 'd']

//------------------------------let-----------var-------------------const-------------------------//

// let's start with var

function sayHello() {
	var firstName = "Geetesh";
	//console.log("Hello", firstName);
	// in the we tried to access the firstName and we successeed
}
// now let's try to access out-side the function
//console.log(firstName);
// ReferenceError: firstName is not defined
sayHello();
// which means the var is scoped in a function
// let's try using block

if (1 == 1) {
	var lastName = "Patel";
	console.log(lastName);
}
// now let's try to access the var outside the block
console.log(lastName);
// accessible :- which means var is only scoped inside a function

// let's try for let also

function sayHello() {
	function sayBye() {
		let firstName = "Geetesh";
	}
	sayBye();
}
console.log("Bye", firstName, "from Bye function");
// Error :- ReferenceError: firstName is not defined
sayHello();

// which means let is also  function scoped
// let's check for block also

if (1 == 1) {
	let firstName = "Geetesh_g";
	//console.log(firstName);
	//firstName is accessible inside the block
}

// lets try to acess outside the function
console.log(firstName);
// Error :- ReferenceError: firstName is not defined

// which means let is block scoped also & same for const

//---------------------------rest-------------------------------//

// now we will see the rest operator

let printHobbies = (...rest) => {
	console.log(...rest);
};

// printHobbies(
// 	"Coding",
// 	"Learning_New",
// 	"Travalling",
// 	"Tracking",
// 	"Reading_Books"
// );
// what if i want to add more hobbies here

printHobbies(
	"Coding",
	"Learning_New",
	"Travalling",
	"Tracking",
	"Reading_Books",
	"Speaking_Eng",
	"Cricket"
);
// i have to add more parameters to function that is not a good way
// to overcome this kind of problem we use rest operator

//*  ***** rest operator we use sometimes when a api do not accepts array a parameter********

//----------------spread----------------------

// this is also a very important concept in js

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];

// if we want all the element of array and we don't want to make any change in arr
// then we can use spread operator

let arr3 = [...arr, ...arr2];

// real world example = let if we want same structur of our data as we already have
// just we want some changes in it, so we can spread that data and can make changes
// it will not affect the previous one and can be used
// Example :-

let styleObj = {
	width: "60%",
	font_style: "bold",
	color: "Black",
};

let newStyle = { ...styleObj, color: "Pink", font_style: "new roman" };

// here we can see that we have made changes to new style object
// and the previous object is same

//-----------------------------destructuring--------------------------//

let arr = [1, 2, 3, 4, 5, 6];

// syntax od destructuring

let [item1, item2, , , , item6] = arr;

item1 = 8;
// this will only change the value of item1 but in the array there'll be no impact

// let user = {
// 	name: "geetesh",
// 	age: 19,
// };

// let { name, age } = user;

// lets make it more complecate

let user = {
	name: "Geetesh",
	age: 19,
	hobbies: ["Coding", "cricket"],
	fear: "To encounter something new",
	education: {
		deg: {
			name: "B.Tech",
		},
	},
};

let {
	name: firstName,
	hobbies: [h1, h2],
	fear,
	education: {
		deg: { name: degName },
	},
} = user;

// Another very real world example

function useState(num) {
	let count = num;
	let setCount = function () {
		console.log(`setting the count: ${count}`);
	};

	return [count, setCount];
}
let resultArr = useState(20);
let resultCount = resultArr[0];
let resultSetFunction = resultArr[1];
resultSetFunction();

// the destructuring way, super neat
let [count, setCount] = useState(30);

setCount(); //-> setting the count: 30

// lets take one more example of it
// here we are destructuring the  object

let userObj = {
	firstName: "geetesh",
	lastName: "Patel",
};

function printName({ firstName, lastName }) {
	console.log(`${firstName} ${lastName}`);
}

printName(userObj);

//----------------------------IIFE_issue---------------------------------
// this is a normal function expression
function add(a, b) {
	console.log(a + b);
}

add(5, 3);

//IIFE(Imediete Invoke Function Expression) statement

(function sub(a, b) {
	console.log(a - b);
})(18, 12);
