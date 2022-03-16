// console.log(document.all);

// selecting an element/elements
// by tag name
// let header = document.getElementsByTagName("header");
let header = document.querySelector("header");
let title = document.querySelector("h1");
// console.log(title.value);//error
// console.log(title.textContent);
// console.log(header.innerHTML);
// console.log(header.innerText);
// console.log(title.textContent);

// console.log(typeof header);

// by class name
// let li = document.getElementsByClassName("item");
let lis = document.querySelectorAll(".item");
// console.log(lis[0]);
// let newLis = [...lis];
// let newLis = Array.from(lis);
let newLis = Array.prototype.slice.call(lis);
let count = 1;
// use array.from method --- mdn
console.log("trach");
for (let li of lis) {
  console.log(`${newLis.indexOf(li) + 1} : ${li.textContent}`);
  // li.textContent = count;
  // count++;
}
// console.log(lis);

// console.log(li[0].textContent);

//by id - unique
// let items = document.getElementById("items");
let itemsTwo = document.querySelector("#items");

// console.log(items);

// by name
// let itemInput = document.getElementsByName("item-input");
let itemInput = document.querySelector("input[name='item-input']");
itemInput.type = "password";
// console.log(itemInput.textContent);
let submitBtn = document.querySelector("input[type='submit']");
submitBtn.value = "+New Item";

// console.log(submitBtn.value);
// console.log(itemInputTwo);

// console.log(itemInput);

// QUERY SELECTOR
let allLi = document.querySelectorAll("li");

// console.log(typeof haeaderTwo);
// console.log(itemaTwo);
// console.log(allLi);
// console.log(itemsTwo);

let option = document.querySelector("option");
option.value = "transgender";
option.textContent = "Transgender";
// console.log(option.value);
// console.log(option.textContent);

let extras = document.querySelector("#extras");

let btn = document.createElement("button");
btn.textContent = "Send message";
extras.appendChild(btn);

extras.removeChild(btn);
