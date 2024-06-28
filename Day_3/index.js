// this keyword

// function sayHello() {
// 	console.log("Hello from ", this.name);
// }

// function sayName() {
// 	console.log("My name is ", this.name);
// }

// const john = {
// 	name: "John Doe",
// 	age: 19,
// 	sayName: sayName,
// 	sayHello: sayHello,
// };

// const chrish = {
// 	name: "Chrish Evans",
// 	age: 34,
// 	sayName: sayName,
// 	sayHello: sayHello,
// };

// john.sayHello();
// john.sayName();

// chrish.sayHello();
// chrish.sayName();

// // some rules for this keyword
// // rule 1 if we directly use this keyword in a regular this aware function it will always point to the window object
// // example :-

// function sayGoodMorning() {
// 	console.log("Good Morning!", this);
// }

// sayGoodMorning();

// rule 2 implicitly returning this keyword
// let user = {
// 	name: "Geetesh",
// 	age: 17,
// 	location: "Indore",
// };
/*
function sayHello() {
	console.log("Hello", this.name);
	if (this.age >= 18) {
		console.log(`${this.name} you'r Eligible for Driving License`);
	} else {
		console.log(`Sorry!!  ${this.name} you'r not Eligible for Driving License`);
	}
}

user.sayHello();

// rule 3 explicit calling this keyword
// call

let my_user = {
	name: "Ram",
	age: 18,
	city: "Sohagpur",
};

function sayGoodBye() {
	console.log(`Good Bye!! ${this.name}`);
}

sayGoodBye.call(my_user);

// apply
// we can call the same function with another keyword that is apply

sayGoodBye.apply(user);

// rule 4 there is another keyword called bind
// bind creates a brand new function which, we can call later

let greets = sayGoodBye.bind(user);
greets();

// rule 6 behaviour of this keyword in different functions

// regular this aware function
// in this function the value of this keyword depends where it is being called
// example

// function parentFunc() {
// 	console.log(this);
// 	function childFun() {
// 		console.log(this);
// 	}
// 	childFun();
// }

// parentFunc.call(user);

// in the console we can clearly see that in regular function
// the value off this function depends where it is called

// arrow function
// in the arrow function the value of this keyword depends on where the function is sitting
// example

// function parentFunc() {
// 	console.log(this);
// 	function childFun() {
// 		console.log(this);
// 	}
// 	childFun();
// 	let sayBye = () => {
// 		console.log(`Bye!!! `, this.name);
// 	};
// 	sayBye();
// }

// parentFunc.call(user);
// a better example of this keyword in arrow function is below here 👇👇

function sayRegularHello() {
	console.log("Hello", this.name);
}

let sayArrowHello = () => console.log(`Hello ${this.name}`);

function GreetingsFun() {
	console.log(`Greetings ${this.name}`);
  
	sayRegularHello();
	sayArrowHello();
  
	function sayRegularBye() {
		console.log(`Bye!!`, this.name);
	}
	sayRegularBye();

	let sayArrowGoodBye = () => console.log(`Bye!! ${this.name}`);
	sayArrowGoodBye();
}

GreetingsFun.call(user);


//-----------------Interview ques on this-------------------//
// 1. first question

function sayGoodbye() {
	console.log("Good bye! ", this);
}

function sayHello() {
	console.log("Helloo! ", this);
	sayGoodbye();
}

sayHello();

//expected :- 1.Helloo! window obj , 2.Good bye! window obj ✅ 


//2. Second question

function sayHello() {
	console.log("Hello! from ", this.name);
}

var john = {
	name: "John Doe",
	age: 30,
	sayName: function () {
		// this.age = 35;
		console.log("My name is ", this.name);
	},
	sayHello: sayHello,
};

var james = {
	name: "James Bond",
	age: 27,
	sayName: function () {
		console.log("My name is ", this.name);
	},
	sayHello: sayHello,
};

john.sayName();
john.sayHello();

james.sayName();
james.sayHello();

// expected :- 1.My name is John Doe, 2.Hello from John Doe
// 3.My name is James Bond , 4.Hello from James Bond ✅

// 3. Third Question

function sayHello() {
	console.log("Hello! ", this);
}

var john = {
	name: "John Doe",
	age: 30,
};

var james = {
	name: "James Bond",
	age: 30,
};

sayHello.call(james);
sayHello.call(john);

// expected :- 1. Hello! {
//   name: "John Doe",
//   age: 30
// }
// 2. {
  //   name: "James Bond",
//   age: 30
// } ❎ serial is apposite should be more carefull


// 4. Fourth question

var sayArrowHello = () => {
	console.log("Arrow Hello ", this);
};

sayArrowHello();

function sayRegularHello() {
	console.log("Regular Hello ", this);
}

sayRegularHello();

// Expected :- boath will return window object ✅

*/

// 5. Fifth question

var john = { name: "John Doe", age: 25 };

var sayArrowHello = () => {
	console.log("Arrow Hello ", this);
};

function sayRegularHello() {
	console.log("Regular Hello ", this);
}

function sayRegularName() {
	console.log("My Regular name is ", this.name, this);
	sayRegularHello();
	sayArrowHello();
	var sayArrowGoodBye = () => {
		console.log("Arrow GoodBye ", this);
	};
	sayArrowGoodBye();
}

sayRegularName.call(john);

// expected :- 1.John Doe , 2.window , 3.window, john object ✅
