import { Mensagem } from "@/types";

export default async function sendWhatsapp(dados: Mensagem) {
  try {
    const response = await fetch('https://graph.facebook.com/v21.0/442465622289459/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: `${process.env.TEL}`,
        type: 'template',
        template: {
          name: 'mensagem_email',
          language: { code: 'pt_BR' },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: dados.subject },
                { type: 'text', text: dados.text }
              ]
            }
          ]
        }
      })
    })

    console.log(response)

    return 'mensagem enviada'
  } catch (error) {
    console.error(error)
    return 'Mensagem não enviada'
  }

}
