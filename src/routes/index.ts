import {Router, Request, Response} from "express";
import { request } from "http";
import *  as homeController from "../controllers/homecontroller"
import *  as userController from "../controllers/userController"

const router = Router()

router.get('/',homeController.home)
router.get('/idade',userController.idade)
router.get('/nome', userController.nome)
router.get('/atividade', userController.atividade)
router.get('/DesIdade', userController.idadeGet)
router.post('/DesIdade',userController.idadeResultado)
router.get('/contato',userController.contato)

export default router