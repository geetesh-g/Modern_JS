let quaue = ["Geetesh", "Annu", "Sidd", "Issu"];
let ordList = document.createElement("ol");

for (let i = 0; i <= quaue.length - 1; i++) {
	let list = document.createElement("li");
	list.innerHTML = `${quaue[i]}`;
	ordList.append(list);
}

document.body.append(ordList);
