//captura de elementos
const buttonNo = document.querySelector("#buttonNo");
const buttonS = document.querySelector("#buttonS");
const buttonC = document.querySelector("#buttonC");
const formulario = document.querySelector("#formulario");
const servicos = document.querySelector("#servicos");
const idMaq = document.querySelector("#idMaq");
const modeloMaq = document.querySelector("#modeloMaq");
const marcaMaq = document.querySelector("#marcaMaq");
const anoMaq = document.querySelector("#anoMaq");
const descMaq = document.querySelector("#descMaq");
const mecanicoMaq = document.querySelector("#mecanicoMaq");
const dataMaq = document.querySelector("#dataMaq");
const status = document.querySelector("#statusMaq")

//habilitar formulário OS
buttonNo.addEventListener("click", () => {
  buttonNo.style.display = "none";
  buttonS.style.display = "flex";
  buttonC.style.display = "flex";
  formulario.style.display = "flex";
});

//desabilitar formulário OS
buttonC.addEventListener("click", () => {
  formulario.style.display = "none";
  buttonC.style.display = "none";
  buttonS.style.display = "none";
  buttonNo.style.display = "flex";
});

//ordens de serviço
window.addEventListener("DOMContentLoaded", async () => {
  const resposta = await fetch("http://localhost:3000/OS");
  const ordens = await resposta.json();
  const resposta1 = await fetch("http://localhost:3000/maquinas");
  const maquina = await resposta1.json();

  ordens.forEach((ordem) => {
    const divTC = document.createElement("div");
    divTC.classList = "divTC";

    const divTitle = document.createElement("div");
    divTitle.classList = "divTitle";

    const cardDiv = document.createElement("div");
    cardDiv.classList = "cardDiv";

    //////////////////////////////////////////////

    const id_ordem = document.createElement("h1");
    id_ordem.textContent = `Ordem: ${ordem.id_ordem}`;
    divTitle.appendChild(id_ordem);

    const id_maquina = document.createElement("h2");
    id_maquina.textContent = `Número serial da máquina: ${ordem.id_maquina}`;
    cardDiv.appendChild(id_maquina);

    const nome_mecanico = document.createElement("h2");
    nome_mecanico.textContent = `Mecânico responsável: ${ordem.nome_mecanico}`;
    cardDiv.appendChild(nome_mecanico);

    const descricao_problema = document.createElement("h2");
    descricao_problema.textContent = `Descricão: ${ordem.descricao_problema}`;
    cardDiv.appendChild(descricao_problema);

    const status = document.createElement("h2");
    status.textContent = `Status da ordem: ${ordem.status}`;
    cardDiv.appendChild(status);

    const data_abertura = document.createElement("h1");
    data_abertura.textContent = `Data de registro: ${ordem.data_abertura}`;
    cardDiv.appendChild(data_abertura);

    divTC.appendChild(divTitle);
    divTC.appendChild(cardDiv);
    servicos.appendChild(divTC);
    // servicos.appendChild(divTitle);
    // servicos.appendChild(cardDiv);
  });

  idMaq.innerHTML = "";
  maquina.forEach((maquina) => {
    idMaq.innerHTML += `
      <option value="${maquina.id_maquina}">${maquina.id_maquina}</option>
    `;
  });
});

async function criarOrdem() {
  const nome_mecanico = mecanicoMaq.value;
  const data_abertura = dataMaq.value;
  const descricao_problema = descMaq.value;
  const status = statusMaq.value;
  const id_maquina = idMaq.value;

  console.log(
    nome_mecanico,
    data_abertura,
    descricao_problema,
    status,
    id_maquina,
  );

  const resposta = await fetch("http://localhost:3000/cadastrarOS", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome_mecanico,
      data_abertura,
      descricao_problema,
      status,
      id_maquina,
    }),
  });

  if (resposta.status == 201){
    alert("Produto cadastrado!");
  }
}

buttonS.addEventListener("click", () => {
  criarOrdem()
  window.location.reload()
});
