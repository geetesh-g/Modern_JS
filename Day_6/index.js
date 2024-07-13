let users = [
	{ id: 1, name: "Geetesh" },
	{ id: 2, name: "Anurag" },
	{ id: 3, name: "Sidd" },
];

let newObj = users.reduce((acc, el) => {
	acc[el.name] = el.id;
	return acc;
}, {});

console.log(newObj);

// Problem 2

let newUsers = [{ age: 20 }, { age: 16 }, { age: 24 }, { age: 32 }];

let newArr = newUsers.map((item) => item.age);
console.log(newArr);

// expected to return [20,16,24,32]

// Problem 3

let data = [
	{ name: "John", subject: "Javascript" },
	{ name: "John", subject: "HTML" },
	{ name: "John", subject: "CSS" },
	{ name: "Pete", subject: "English" },
	{ name: "Pete", subject: "Rust" },
	{ name: "Mary", subject: "Django" },
	{ name: "Mary", subject: "Python" },
	{ name: "Pete", subject: "Java" },
];

// Trying to understand the problem
// we have the same name repeatedly but with different subject
// what we can do that we can make an array of subjects and can assign the array to the person name

// trying to solve the problem
// we have to craete a property in an object with name and can assign an empty array
// and we will add subjects in the same array until the name is same if the name is change
// then we will create a differnt element in object and will repeate the same process

// let subjectHash = data.reduce((acc, item) => {
// 	let name = item.name;
// 	if (!acc[name]) {
// 		acc[name] = [];
// 		acc[name].push(item.subject);
// 	} else {
// 		acc[name].push(item.subject);
// 	}

// 	return acc;
// }, {});

// the above solution can be done like that too

let subjectHash = data.reduce((acc, item) => {
	let name = item.name;
	let sub = item.subject;

	acc[name] = acc[name] || [];
	acc[name].push(sub);
	return acc;
}, {});

console.log(subjectHash);

// expected
/* 

{

John : ["Javascript","HTML","CSS"]
Pete : ["Java","English","Rust"]
Mary : ["Django","Python","Node.js"]

}

*/

// Expression in JS

let a = 5; // simply declaring a var a and assigning the value as 5;
let b = a++; // here this expression will first return the value of a and then increase it's value by 1 now a=6
let c = ++a; // here this expr. will first increase the value of a by 1 now a = 7 then return the value of a

console.log(a); // expected 7
console.log(b); // expected 5
console.log(c); // expected 7
