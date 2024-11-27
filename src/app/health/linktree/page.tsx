import Linktree from "@/components/Linktree";

export default function Page() {

  const acesso = [
    {
      texto: 'Acesse o nosso site:',
      link: '/health'
    },
    {
      texto: "Agende sua visita:",
      link: '/health/#contatos__health'
    },
    {
      texto: "Receitas Deliciosas:",
      link: "/health/#receitas"
    },
    {
      texto: 'Conheça o Grupo Mensch:',
      link: '/'
    }
  ]
  
    return ( 
      <>
        <Linktree
          empresa="Mensch Health"
          logo= '/assets/logos/mensch_health.svg'
          tag='health'
          acesso={acesso}
          email="mailto:health@grupomensch.com.br"
          whatsapp="https://wa.me/5534996968654/?text=Ol%C3%A1%20venho%20do%20seu%20site%20e%20quero%20falar%20com%20voc%C3%AA!"
          instagram="https://www.instagram.com/mensch.health/"
          facebook="https://www.facebook.com/menschhealth"
          linkedin="https://www.linkedin.com/company/mensch-health/"
        />
      </>
    )
}