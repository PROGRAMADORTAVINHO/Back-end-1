import {Router, request, response} from "express";

const router = Router()

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