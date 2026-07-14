let input = document.querySelector("#username");
let btn = document.querySelector(".btn");

let li = document.querySelector("li");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let items = document.createElement("li");
  items.innerText = input.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");

  items.appendChild(delbtn);

  ul.appendChild(items);
  input.value = "";
});


ul.addEventListener("click",function(event){ // by event bubbling
  if(event.target.nodeName == "BUTTON") {
    let listItems = event.target.parentElement;
    listItems.remove();
    console.log("deleted");
  }

});