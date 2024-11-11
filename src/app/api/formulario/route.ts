import { NextResponse } from "next/server";
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

export async function POST(
  req: Request
) {
  try {
    const data = await req.json();
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.to,
      subject: data.subject,
      text: data.text
    })
    console.log(data);

    return NextResponse.json({ mensagem: 'Mensagem Recebida Com Sucesso!' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ mensagem: 'Mensagem não enviada. Contate-nos por telefone.' });
  }
}
