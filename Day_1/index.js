// guess the otputs

function chips() {
	console.log("sync: chips");
}

function pizza() {
	setTimeout(() => {
		console.log("async: pizza");
	}, 0);
}

function main() {
	chips();
	pizza();
	chips();
	chips();
	chips();
}

main();

// summery -: when ever we use set time out function , bcz it's async function it will be executed in the last

// expected output
// chips will be invoked -> "sync:chips"
// chips will be invoked -> "sync:chips"
// chips will be invoked -> "sync:chips"
// chips will be invoked -> "sync:chips"
// pizza will be invoked -> "async: pizza"
// true guess

function sayGoodbye() {
	console.log("Good bye! ", this);
}

function sayHello() {
	console.log("Helloo! ", this);
	sayGoodbye();
}

sayHello();

// summery :- here this is reprenting window object

// expected output
// "Helloo! window object"
// "Good bye! window object"
// true guess

var sayArrowHello = () => {
	console.log("Arrow Hello ", this);
};

sayArrowHello();

function sayRegularHello() {
	console.log("Regular Hello ", this);
}

sayRegularHello();

// expected output
// arrow function do not support this keyword
// sayRegular function will return "Regular Hello" window  object
// wrong guess

// summery :- arrow function also supports this keyword

let name = "Ilya";
// alert(`hello ${1}`); // ?
// alert(`hello ${"name"}`); // ?
// alert(`hello ${name}`); // ?

// expected output
// hello 1
// hello name
// hello ilya
// guess true
// summery :- what ever we will give to template littrals it will return it value

let a = 2;
let x = 1 + (a *= 2);
// expected -> 5 guess true

// alert(null || (2 && 3) || 4);
// expected 3
// expalination
//  null , "" , false , undefined , 0  and NaN are the falsy values
// except above values every value is a truthy value
// || (or) operator looks for a truthy value if it finds the value it returns otherwise it will return the second value
// && (and) operator looks for a truthy value if it finds it will return the value otherwise it will return the second value

// according to above method
// first of all null will come which is a falsy value
// so || will look for 2nd value that is (2 && 3)
// bcz $$ operators looks for falsy value so it will check 2 and sadly 2 is truthy value so it will go to 2nd value and check it sadly it is also truthy value
// it will return 3
// bcz || looks only for truthy value and it will find 3 it will return 3
// guess is true

let x1 = (1 && 2) ?? 3;
// alert(x);

// expected output -> 2
// explaination
// ?? operator only check for null and undefine if it finds those it will check for 2nd value otherwise it will always return the first value

// The function should return "Geetesh Gurjar's age is 19."
// use template string
function greet() {
	let firstName = "Geetesh";
	let lastName = "Gurjar";
	let age = 19;

	let greeting = `${firstName} ${lastName}'s age is ${age}.`;
	return greeting;
}

let res = greet();
console.log(res);
// guess true

// bad | good | great
let feelingsData = {
	Vivek: "Good",
	Akash: "Great",
};

// how can i add a new entry for 'Rahul' who is feeling bad
feelingsData.Rahul = "Bad";

// how can I add a new entry for 'Nisha' who is feeling great
feelingsData.Nisha = "Great";

let newUser = "Bassam";
// how can I add the newUser who is feeling good? the value of newUser
feelingsData[newUser] = "Good";
// should be the key of the new entry

console.log(feelingsData);
console.log("Feelings of Vivek", feelingsData.Vivek); // using dot notation
console.log("Feelings of Akash", feelingsData["Akash"]); // using bracket notation

// how can I access data for Rahul
console.log("Feelings of Rahul", feelingsData.Rahul);

// how can I access data for the newUser
console.log(`feelings of ${newUser}`, feelingsData[newUser]);

// objectFactory('Raj', 26) is expected to return {Raj: 26}
// objectFactory('Vijay', 24) is expected to return {Vijay: 24}
function objectFactory(fname, age) {
	let obj = {};
	// your code starts
	obj[fname] = age;
	// your code ends
	return obj;
}

let res1 = objectFactory("Raj", 26);
console.log(res);

let res2 = objectFactory("Vijay", 24);
console.log(res2);

// symbols in java script

// let name = Symbol("Geetesh");
// console.log(name.description);

// output should = Geetesh
// as user clicks on submit button entire data should be displayed on display

//-----------------------------------LLD-----------------------------------------------------

// when user will click on submit button inkoke some function
