// let quaue = ["Geetesh", "Annu", "Sidd", "Issu"];
// let ordList = document.createElement("ol");

// for (let i = 0; i <= quaue.length - 1; i++) {
// 	let list = document.createElement("li");
// 	list.innerHTML = `${quaue[i]}`;
// 	ordList.append(list);
// }
// document.body.append(ordList);

// learning the java script important concepts

let baseURL = "https//www.carDekho.com";

let cars = [
	{
		name: "Range Rover",
		model: "Sport",
		fuel: "Petrol",
		image: "/car?id=1",
	},
	{
		name: "Rolls Royce",
		model: "Dawn",
		fuel: "Petrol",
		image: "/car?id=2",
	},
	{
		name: "Rolls Royce",
		model: "Phantom",
		fuel: "Petrol",
		image: "/car?id=3",
	},
];

// add  carDekho.com in front of every car image url

let newCars = cars.map((item) => {
	let obj = { ...item }; // spread in new one so that original can be same
	obj["image"] = baseURL + obj["image"]; // adding baseURL
	return obj;
});

console.log(newCars);
console.log(cars);

// better error handling
