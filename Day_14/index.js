// let dataID = document.querySelector("#data-id");

let link = document.querySelector("#example-link");
let buttons = [
	{
		text: "edit",
		"data-id": 1,
	},
	{
		text: "delete",
		"data-id": 2,
	},
];

link.onclick = (e) => {
	e.preventDefault();
	console.log(e.target.dataset.id);
	console.log(e.target.dataset.name);
	createBtns(buttons);
};

//--------------------------------------------------------------------------------

let main = document.querySelector("#main");

// create buttons using given data

function createBtns(data) {
	main.innerHTML = `${data
		.map((item) => {
			let dataID = item["data-id"];
			let text = item["text"];
			return createBtn(dataID, text);
		})
		.join("")}`;
}

function createBtn(id, text) {
	return `
    <button id = ${id}>${text}</button>
  `;
}
