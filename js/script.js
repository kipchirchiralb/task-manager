let form = document.querySelector("form");
let itemsList = document.querySelector("#items-list");

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
    span.appendChild(icon);
    li.appendChild(span);
    itemsList.appendChild(li);
    form.reset();
  } else {
    console.log("empty");
  }
};
form.addEventListener("submit", addItem);

let deleteIcon = document.querySelectorAll(".delete-icon");

const deleteItem = (e) => {
  console.log("here");
  let liItem = document.querySelector(".item");
  itemsList.removeChild(liItem);
};

deleteIcon.forEach((icon) => {
  icon.addEventListener("click", deleteItem);
});
