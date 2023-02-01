import {Router, Request, Response} from "express";
import { request } from "http";

const router = Router()

router.get('/idade', (req: Request, res:Response)=>{
    let idade: number = 18
    let mostraridade: boolean = false
    if(idade >= 18){
        mostraridade = true
    }
    res.render("pages/idade",{
        nome:"João otavio",
        mostraridade,
        products:[
            'teclado',
            'mouse',
            'fone'
        ]
    })
    
})

router.get('/',(req:Request, res: Response)=>{
    res.render('pages/home',{
       nome:"João Otavio",
       shoWelcome: false
    })
})
router.get('/contato',(req:Request, res: Response)=>{
    res.render('pages/contato')
})
router.get('/1',(req,res) =>{
    res.send("pega na minha pomba")
})
router.get('/2',(req,res) =>
{res.send("pega na minha pombaaaaaa")
})
router.get('/3/:slug',(req,res) =>{
    let slug: string = req.params.slug
    res.send(`notici/a; ${slug}`)
})
router.get('/voo/:origem-:destino',(req,res) =>{
    let {origem,destino} =req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

export default router