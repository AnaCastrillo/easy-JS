// SWITCH THE LIGHT

const light = document.querySelector(".light");
const switchLight = document.querySelector(".switch");

let power = true;

function turnPower() {
  if (power) {
    power = false; //Necesitaremos crear el booleano dentro del condicional, de manera que cuando sea verdadero lo transformemos a falso y viceversa
    light.classList.add("on");
    light.classList.remove("off"); //si en algún punto el interruptor se "atasca", puede que necesitemos eliminar las clases que no sean necesarias
  } else {
    power = true;
    light.classList.add("off");
    light.classList.remove("on");
  }
  console.log(power);
}
switchLight.addEventListener("click", turnPower);
