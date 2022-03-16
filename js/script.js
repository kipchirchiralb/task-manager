let form = document.querySelector("form");
let itemsList = document.querySelector("#items-list");

const countItems = () => {
  let count = document.querySelector("#count");
  count.textContent = itemsList.childElementCount;
};
countItems();

const deleteItem = (e) => {
  let item = e.target.parentNode.parentNode;
  itemsList.removeChild(item);
  countItems();
};

const addItem = (e) => {
  e.preventDefault();
  let newItem = document.querySelector("#new-item");
  if (newItem.value.length) {
    let li = document.createElement("li");
    li.className = "item";
    li.textContent = newItem.value;
    let span = document.createElement("span");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash-can");
    span.className = "delete-icon";
    icon.addEventListener("click", deleteItem);
    span.appendChild(icon);
    li.appendChild(span);
    itemsList.appendChild(li);
    form.reset();
    countItems();
  } else {
    console.log("empty");
  }
};

form.addEventListener("submit", addItem);
