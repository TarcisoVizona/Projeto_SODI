const buttonNo = document.querySelector("#buttonNo");
const buttonS = document.querySelector("#buttonS");
const buttonC = document.querySelector("#buttonC");
const formulario = document.querySelector("#formulario");

buttonNo.addEventListener("click", () => {
  buttonNo.style.display = "none";
  buttonS.style.display = "flex";
  buttonC.style.display = "flex";
  formulario.style.display = "flex";
});

buttonC.addEventListener("click", () => {
  formulario.style.display = "none";
  buttonC.style.display = "none";
  buttonS.style.display = "none";
  buttonNo.style.display = "flex";
});
