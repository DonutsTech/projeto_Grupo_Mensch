import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import enviarMensagem from "./whatsaap";

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true,
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

export async function POST(req: Request) {
  try {
    console.log("Recebendo requisição POST...");

    const data = await req.json();
    console.log("Dados recebidos:", data);

    const resp = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.to,
      subject: data.subject,
      text: data.text
    });

    console.log("Mensagem enviada com sucesso:", resp);

    await enviarMensagem(data);

    if (resp.rejected.length > 0) {
      console.log("E-mail rejeitado:", resp.rejected);
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
    return new NextResponse(
      JSON.stringify({ mensagem: 'Mensagem não enviada. Contate-nos por telefone.' }),
      { status: 500, headers: corsHeaders }
    );
  }
}
