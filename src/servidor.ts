import  express from "express"
import {Server} from 'http'

const server = express()



server.get('/1',(req,res) =>{
    res.send("pega na minha pomba")
})
server.get('/2',(req,res) =>
{res.send("pega na minha pombaaaaaa")
})
server.get('/3/:slug',(req,res) =>{
    let slug: string = req.params.slug
    res.send(`notici/a; ${slug}`)
})
server.get('/voo/:origem-:destino',(req,res) =>{
    let {origem,destino} =req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

server.listen(3000)