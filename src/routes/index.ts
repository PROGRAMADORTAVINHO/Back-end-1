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

router.get('/nome',(req:Request, res: Response)=>{

    let nome : string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})
router.get('/atividade',(req:Request, res: Response)=>{

    let nome : string = req.query.nome as string
    let endereco : string = req.query.endereco as string
    let telefone : string = req.query.telefone as string
    let idade : number = req.query.idade as unknown as number 


    res.render('pages/atividade',{
        nome,telefone,idade,endereco
    })
})
router.get('/DesIdade',(req:Request, res:Response)=>{
    res.render("pages/DesIdade")
})
router.post('/DesIdade',(req:Request, res: Response)=>{

    let AnoQueNasceu : number = req.body.AnoQueNasceu as unknown as number

    let idade : number
    idade = 2023 - AnoQueNasceu

    res.render('pages/DesIdade',{
        AnoQueNasceu,idade
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