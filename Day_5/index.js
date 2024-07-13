function person() {
	this.name = "Will Smith";
}

function actor() {
	let obj = {};
	obj.movieName = "Aladin";

	// write your code here
	person.call(obj);
	return obj;
}

let will = actor();

console.log(will.name); // should be Will Smith
console.log(will.movieName); // should be Aladin
