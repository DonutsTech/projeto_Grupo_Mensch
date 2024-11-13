/*
import axios from 'axios';
import { NextResponse } from "next/server";

interface Body  {
  to: string;
  subject: string;
  text: string;
}

export default async function sendWhatsapp(dados: Body) {
  try {
    console.log(dados)

    await axios('https://graph.facebook.com/v21.0/442465622289459/messages', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`, // Substitua com o seu token de ambiente
        'Content-Type': 'application/json',
      },
      data: {
        messaging_product: 'whatsapp',
        to: `${process.env.TEL}`,
        type: 'template',
        template: {
          name: 'mensagem_informacao',
          language: { code: 'pt_BR' },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: dados.to },
                { type: 'text', text: dados.subject },
                { type: 'text', text: dados.text },
              ]
            }
          ]
        },
      },
    })


    return NextResponse.json({ message: 'Erro ao enviar o email.' }, { status: 200 });
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Erro ao enviar o email.' }, { status: 500 });
  }
}


---- Templete informacao ----
  to: {{to}},
  subject: {{subject}},
  text: {{text}},
*/
