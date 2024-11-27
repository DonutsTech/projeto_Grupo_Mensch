import Linktree from "@/components/Linktree";

export default function Page() {

  const acesso = [
    {
      texto: 'Acesse o nosso site:',
      link: '/mind'
    },
    {
      texto: 'Conheça o Grupo Mensch:',
      link: '/'
    }
  ]
  
    return ( 
      <>
        <Linktree
          empresa="Mensch mind"
          logo= '/assets/logos/mensch_mind.svg'
          tag='mind'
          acesso={acesso}
          email="mailto:mind@grupomensch.com.br"
          whatsapp="https://wa.me/5534996665871/?text=Ol%C3%A1%20venho%20do%20seu%20site%20e%20quero%20falar%20com%20voc%C3%AA!"
          instagram="https://www.instagram.com/mensch.mind/"
          facebook="https://www.facebook.com/menschmind"
          linkedin="https://www.linkedin.com/company/grupo-mensch/"
        />
      </>
    )
}