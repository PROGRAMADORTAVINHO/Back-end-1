import { Request, Response } from "express";

export const idade = ((req:Request, res:Response)=>{
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

export const atividade = ((req:Request, res:Response)=>{
    let nome : string = req.query.nome as string
    let endereco : string = req.query.endereco as string
    let telefone : string = req.query.telefone as string
    let idade : number = req.query.idade as unknown as number 


    res.render('pages/atividade',{
        nome,telefone,idade,endereco
    })
})

export const nome = ((req:Request, res:Response)=>{
    let nome : string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})

export const idadeGet = ((req:Request, res:Response)=>{
    res.render("pages/DesIdade")
})

export const idadeResultado = ((req:Request, res:Response)=>{
    
    let AnoQueNasceu : number = req.body.AnoQueNasceu as unknown as number

    let idade : number
    idade = 2023 - AnoQueNasceu

    res.render('pages/DesIdade',{
        AnoQueNasceu,idade
    })
})

export const contato = ((req:Request, res:Response)=>{
    res.render('pages/contato')
})
