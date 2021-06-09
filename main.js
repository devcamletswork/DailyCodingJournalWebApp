const displayList = document.getElementById("displayList");
const listDiv = document.getElementById("list");
const addItemBtn = document.getElementById("addItem");
const addItemInput = (document.getElementById("inputItems").style.height =
  "200px");
const removeItemInput = document.getElementById("removeItem");

displayList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    displayList.textContent = "Hide Journal";
    listDiv.style.display = "block";
  } else {
    displayList.textContent = "Show Journal";
    listDiv.style.display = "none";
  }
});
addItemBtn.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.textContent = inputItems.value;
  ul.appendChild(li);
  inputItems.value = "";
});
removeItemInput.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.querySelector("li:last-child");
  ul.removeChild(li);
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = inputItems.value;
  ul.appendChild(li);
  inputItems.value = '';
  }
});