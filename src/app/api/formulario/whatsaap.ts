import { Data } from "@/types";

export default async function enviarMensagem(data: Data) {
  const resp = await fetch('https://whatsapp-donuts.onrender.com/send', {
    method: 'POST',
    body: JSON.stringify({
      number: data.tel,
      message: `
        Assunto: ${data.subject}.
        ${data.text}
        OBS: Por favor confirme recebimento desta mensagem!
      `
    }),
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
      'Content-Type': 'application/json',
    }
  });

  if (resp.status === 200) {
    console.log('Mensagem enviada com sucesso:');
    return true;
  } else {
    console.log('Falha ao enviar mensagem');
    return false;
  }
}
