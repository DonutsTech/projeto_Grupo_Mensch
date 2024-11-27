import Linktree from "@/components/Linktree";

export default function Page() {

  const acesso = [
    {
      texto: 'Acesse o nosso site:',
      link: '/energiasolar'
    },
    {
      texto: "Deixe o Sol pagar a sua conta:",
      link: '/energiasolar/#cta_solar'
    },
    {
      texto: 'Conheça o Grupo Mensch:',
      link: '/'
    }
  ]
  
    return ( 
      <>
        <Linktree
          empresa="Mensch Energia Solar"
          logo= '/assets/logos/mensch_solar.svg'
          tag='solar'
          acesso={acesso}
          email="mailto:contato@grupomensch.com.br"
          whatsapp="https://wa.me/5534996665871/?text=Ol%C3%A1%20venho%20do%20seu%20site%20e%20quero%20falar%20com%20voc%C3%AA!"
          instagram="https://www.instagram.com/mensch.energiasolar/"
          facebook="https://www.facebook.com/menschenergiasolar"
          linkedin="https://www.linkedin.com/company/menschsolar/posts/?feedView=all"
        />
      </>
    )
}