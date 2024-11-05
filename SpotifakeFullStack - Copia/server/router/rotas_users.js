import Express from "express";
import { listUser, deleteUser, getUser } from "../controller/controlador_usuarios.js";

const rotas_users = Express.Router()

rotas_users.get('/lista', listUser);
rotas_users.delete('/deletar', deleteUser);
rotas_users.get('/receber', getUser)

export { rotas_users }

