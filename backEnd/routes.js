import express from "express";
import sql from "./database.js";
const routes = express.Router();

//Visualizar ordens de serviço
routes.get("/OS", async (req, res) => {
  try {
    const os = await sql`SELECT * FROM ordensServico`;
    if (os) {
      return res.status(200).json(os);
    }
  } catch (error) {
    console.log("Mensagem de erro: " + error);
    return res.status(400);
  }
});

//Maquinas cadastradas
routes.get("/maquinas", async (req, res) => {
  try {
    const maquinas = await sql`SELECT * FROM maquinas`;
    if (maquinas) {
      return res.status(200).json(maquinas);
    }
  } catch (error) {
    console.log("Mensagem de erro: " + error);
    return res.status(400);
  }
});

//cadastrar nova ordem de servico
routes.post("/cadastrarOS", async (req, res) => {
  const {
    nome_mecanico,
    data_abertura,
    descricao_problema,
    status,
    id_maquina,
  } = req.body;

  await sql`INSERT INTO ordensServico(nome_mecanico, data_abertura, descricao_problema, status, id_maquina) 
  values(
  ${nome_mecanico},
  ${data_abertura},
  ${descricao_problema},
  ${status},
  ${id_maquina}
  )`;

  return res.status(201).json("Produto criado!");
});

//cadastrar novo usuario
routes.post("/cadastroUser", async (req, res) => {
  try {
    const { email_usuario, senha_usuario } = req.body;
    const cadUser =
      await sql`INSERT INTO usuario(email_usuario, senha_usuario) VALUES (${email_usuario}, ${senha_usuario})`;
    if (cadUser) {
      return res.status(200).json(cadUser);
    }
  } catch (error) {
    console.log(`Mensagem de erro: ` + error);
    return res.status(400);
  }
});

//login de usuario
routes.post("/usuarios/login", async (req, res) => {
  try {
    const { email_usuario, senha_usuario } = req.body;
    const usuario =
      await sql`SELECT * FROM usuario WHERE email_usuario = ${email_usuario} AND senha_usuario = ${senha_usuario}`;
    if (usuario[0]) {
      return res.status(200).json(usuario[0]);
    }
  } catch (error) {
    console.log(`Mensagem de erro: ` + error)
  }
});

export default routes;
