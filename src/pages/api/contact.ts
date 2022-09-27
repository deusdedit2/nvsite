import { NextApiRequest, NextApiResponse } from "next"

interface Data {
    aa: string
}

export default function Contact(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    // require('dotenv').config()

    console.log('aaaaaaaaaa')
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'noreplynvconstrucoes@gmail.com',
            pass: 'ygkuiplsewdxfqgw',
        },
        secure: true,
    })
    const mailData = {
        from: 'noreplynvconstrucoes@gmail.com',
        to: 'nvconstrucoes17@gmail.com',
        subject: `NV Website | ${req.body.name}`,
        // text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>
        <h3>Você está recebendo esse email, pois entraram em contato através do <a href="https://nvconstrucoes.com.br">website</a></h3>
    
        <p>Nome da Contato ${req.body.name}</p>
        <p>Email de Contato: ${req.body.email}</p>
        <p>Assunto: ${req.body.subject}</p>
    
        <hr />
        <p>Esta é uma mensagem automatizada</p>
    </div>`
    }
    transporter.sendMail(mailData, function (err: any, info: any) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}