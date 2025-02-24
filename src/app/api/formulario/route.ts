import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
// import enviarMensagem from "./whatsaap";


// Configuração do CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true,
  logger: true,
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Erro na verificação do transportador:', error);
  } else {
    console.log('Transportador pronto para enviar e-mails:', success);
  }
});

export async function POST(req: Request) {

  try {
    const data = await req.json();
    const resp = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.to,
      subject: data.subject,
      text: data.text,
    });

    // await enviarMensagem(data);

    if (resp.rejected.length > 0) {
      return new NextResponse(
        JSON.stringify({ mensagem: 'Mensagem não enviada. Contate-nos por telefone.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    return new NextResponse(
      JSON.stringify({ mensagem: 'Mensagem Recebida Com Sucesso!' }),
      { status: 200, headers: corsHeaders }
    );

  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    console.log(error);
    return new NextResponse(
      JSON.stringify({ mensagem: 'Mensagem não enviada. Contate-nos por telefone.' }),
      { status: 500, headers: corsHeaders }
    );

  }
}

