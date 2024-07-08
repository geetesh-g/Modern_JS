// Returns a reference to the element by its ID.

// document.getElementById("container");

// Returns an array-like object of all child elements which have all of the given class names.

// document.getElementsByClassName("div-class");

// Returns an HTMLCollection of elements with the given tag name.

// document.getElementsByTagName("div");

// Returns the first element within the document that matches the specified group of selectors.

// document.querySelector(".div-class");

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.

// document.querySelectorAll("div-class");

// let allItems = document.querySelectorAll(".item");
// console.log(allItems); // NodeList(8) [div.item, div.item, div.item, div.item, div.item, div.item, div.item, div.item]

// allItems.forEach(function (element) {
// 	console.log(element.getAttribute("data-id"));
// });

// -> 1
// -> 2
// -> 3
// -> 4
// -> 5
// -> 6
// -> 7
// -> 8

// there are two ways to change the nodelist into array

// let allItemsArray = Array.from(allItems);
// console.log(allItemsArray);
//-> (8) [div.item, div.item, div.item, div.item, div.item, div.item, div.item, div.item]

// let allItemsArray2 = [...allItems];
// console.log(allItemsArray2);
//-> (8) [div.item, div.item, div.item, div.item, div.item, div.item, div.item, div.item]

// let's do it for our own array

// let dataList = document.querySelectorAll(".div-class");
// console.log(dataList);

// using Array.from method

// let dataListArray = Array.from(dataList);
// console.log(dataListArray);

// using spread array

// let dataListArray2 = [...dataList];
// console.log(dataListArray2);
