import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import sendWhatsapp from "../whatsapp";
//import sendWhatsapp from "../sendWhatsapp/route";

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

export async function POST(
  req: Request
) {
  try {
    const data = await req.json();

    const resp = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.to,
      subject: data.subject,
      text: data.text
    })

    console.log(resp)

    await sendWhatsapp(data)

    return NextResponse.json({ mensagem: 'Mensagem Recebida Com Sucesso!' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ mensagem: 'Mensagem não enviada. Contate-nos por telefone.' });
  }
}


