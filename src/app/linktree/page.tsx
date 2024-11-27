import Linktree from "@/components/Linktree";

export default function Page() {

  const acesso = [
    {
      texto: 'Acesse o nosso site:',
      link: '/'
    },
    {
      texto: "Conheça as marcas:",
      link: '/#marcas'
    },
    {
      texto: 'Vem ser Mensch:',
      link: '/social'
    }
  ]
  
    return ( 
      <>
        <Linktree
          empresa="Grupo Mensch"
          logo= '/assets/logos/grupo_mensch.svg'
          tag='grupo'
          acesso={acesso}
          email="mailto:contato@grupomensch.com.br"
          whatsapp="https://wa.me/5534996665871/?text=Ol%C3%A1%20venho%20do%20seu%20site%20e%20quero%20falar%20com%20voc%C3%AA!"
          instagram="https://www.instagram.com/grupo.mensch/"
          facebook="https://www.facebook.com/profile.php?id=100091541775500&locale=pt_BR"
          linkedin="https://www.linkedin.com/company/grupo-mensch/"
        />
      </>
    )
}