// CHANGE COLORS 2

const block = document.querySelector(".block");
const colorName = document.querySelector(".colorName");

const redSelector = document.querySelector(".js-red");
const greenSelector = document.querySelector(".js-green");
const blueSelector = document.querySelector(".js-blue");


  block.classList.add(a);
  colorName.classList.add(a);
  colorName.innerHTML = a;
}

function remove(a, b){
  block.classList.remove(a, b);
  colorName.classList.remove(a, b);
}


function red(){
  add("red");
  remove("blue", "green");
}
redSelector.addEventListener("click", red);

function green(){
  add("green");
  remove("blue", "red");
}
greenSelector.addEventListener("click", green);

function blue(){
  add("blue");
  remove("red", "green");
}
blueSelector.addEventListener("click", blue);