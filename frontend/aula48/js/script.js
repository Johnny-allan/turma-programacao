const square = document.getElementById("square");
const btn = document.getElementById("btn");

const output = document.getElementById("output");

output.innerHTML = "<p> Ola Turma </p>";
output.innerText = "Ola Turma, tudo bem";
output.textContent = "Mais um Texto";

output.style.color = "#0000ff";
output.style.backgroundColor = "#fff000";

square.style.width = "150px";
square.style.height = "150px";
square.style.backgroundColor = "#000000";

function trocarCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  square.style.backgroundColor = `rgb(${r}, ${g} ,${b})`;
  output.style.color = `rgb(${r}, ${g} ,${b})`;
}

btn.addEventListener("click", trocarCor);
