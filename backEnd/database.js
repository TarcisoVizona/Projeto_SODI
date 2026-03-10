import postgres from "postgres";

const sql = postgres("postgres://postgres:senaisp@192.168.1.16:5432/sodi");

export default sql;
