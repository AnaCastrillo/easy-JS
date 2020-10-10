// COLAPSED

const header = document.querySelector(".header");
const content = document.querySelector(".content");

function colaps(){
  header.classList.toggle("active");
  console.log("hey");
  if(header.classList.contains("active")){
    content.classList.remove("colapsed");
  } else{
    content.classList.add("colapsed");
  }
}

header.addEventListener("click", colaps);