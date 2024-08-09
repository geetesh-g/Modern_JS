// fetch and render reipe data from
// https://real-crab-pleat.cyclic.app/recipes?_page=1&_limit=5

let baseURL = "https://real-crab-pleat.cyclic.app";
let app = document.getElementById("app");
let fetchedRecipeData = [];

let sortExistingBtn = document.querySelector("#sort-existing-data");
let fetchSortedBtn = document.querySelector("#fetch-sorted-data");

sortExistingBtn.onclick = () => {
	fetchedRecipeData.sort((a, b) => {
		return a.price - b.price;
	});
	renderData(fetchedRecipeData);
};

fetchSortedBtn.onclick = async () => {
	let res = await fetch(
		`${baseURL}/recipes?sort=price&order=DESC&_page=1&_limit=5`
	);
	let fetchedSortedData = await res.json(); // Await JSON parsing
	renderData(fetchedSortedData);
};

(async () => {
	let res = await fetch(`${baseURL}/recipes?_page=1&_limit=5`);
	let reciepeList = await res.json(); // Await JSON parsing
	fetchedRecipeData = reciepeList;
	renderData(fetchedRecipeData);
})();

function renderCard(imgSrc, title, description, link, price) {
	return `
    <div class="card">
      <div class="card__img">
        <img src="${baseURL}${imgSrc}" alt="Image" />
      </div>
      <div class="card__body">
        <h3 class="card__item card__title">${title}</h3>
        <div class="card__item card__description">
          ${description}
        </div>
        <h2>${price}</h2>
        <a href="${link}" class="card__item card__link">Read more</a>
      </div>
    </div>
  `;
}

function renderData(reciepeData) {
	app.innerHTML = `<div class = "card-list">
  ${reciepeData.map((item) => {
		let imgSrc = item.image;
		let title = item.name;
		let description = item.instructions.substring(0, 99);
		let link = "https://google.com";
		let price = item.price;
		renderCard(imgSrc, title, description, link, price).join("");
	})}
  </div>`;
}
