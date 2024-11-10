import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Erro na verificação do transportador:', error);
  } else {
    console.log('Transportador pronto para enviar e-mails:', success);
  }
});

type ResponseData = {
  mensagem?: string;
}



export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {

  } else {
    res.status(500).json({ mensagem: 'rota errada' })
  }
}
