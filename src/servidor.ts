import  express from "express"
import {Server} from 'http'
import mainRoutes from './routes/index'
import path from "path"
import mustache from "mustache-express"
import dotenv from 'dotenv'

dotenv.config()
const server = express()

server.set('view engine', 'mustache')

server.use(express.static(path.join(__dirname,"../public")))

server.set('views',path.join(__dirname,'views'))

server.engine('mustache',mustache())

server.use(mainRoutes)
server.use((req,res)=>{
    res.status(404).send("pagina não encontrada")
})
server.use(express.urlencoded({extended:true}))

server.listen(process.env.PORT)