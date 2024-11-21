
import Image from 'next/image';
import Style from './ServicosEnergia.module.scss';
import Scroll from 'react-scroll';


import logo from './assets/mensch_solar.svg';
import GaleriaEnergia from '../GaleriaEnergia';
import Link from 'next/link';
import AboutEnergia from '../AboutEnergia';
import SelosSolar from '../SelosSolar';
import SocialSolar from '../SocialSolar';

const ServicosEnergia = () => {

  return (
    <section className={Style.servicos} aria-label='Como é que funciona os serviços da Mensh Energia Solar' id='servicos_solar'>
      <div className={Style.servicos__head}>
        <h2 className={Style.servicos__head__titulo}>
          Uma Jornada <br />de <span>Servir</span> e <br /><span>Transformar</span>.
        </h2>
        <Image src={logo} draggable="false" alt="Mensh Energia Solar" className={Style.servicos__head__logo} />
      </div>
      <div className={Style.servicos__content}>
        <div className={Style.servicos__content__textos}>
          <p className={Style.servicos__content__textos__paragrafo}>
            Descubra a solução completa para economizar energia e reduzir custos com a Mensch Energia Solar, especialista em Energia Solar Fotovoltaica e líder em inovação e sustentabilidade.
          </p>
          <p className={Style.servicos__content__textos__paragrafo}>
            Nossa jornada começou com uma visão: transformar o futuro com energia solar. Agora, nossa paixão inspira mudanças reais. Junte-se a nós nessa jornada transformadora rumo a um futuro mais sustentável, limpo e próspero para as próximas gerações.
          </p>
          <p className={Style.servicos__content__textos__paragrafo}>
            No Grupo Mensch, o sucesso vai além do lucro financeiro. Nossa missão é transformar vidas e comunidades por meio de soluções inovadoras e sustentáveis, gerando um impacto positivo na sociedade.
          </p>
          <p className={Style.servicos__content__textos__paragrafo}>
            Com pesquisa e análise rigorosas, superamos desafios complexos e criamos um futuro melhor para todas as gerações. Nossa determinação é clara: fazer a diferença no mundo ao nosso redor, inspirando um legado de sustentabilidade e inovação.
          </p>
        </div>
        <div className={Style.servicos__content__galeria}>
          <GaleriaEnergia />
        </div>
      </div>
      <div className={Style.servicos__cta}>
        <p className={Style.servicos__cta__texto}>
          Faça sua simulação e veja como podemos reduzir os seus gastos!
        </p>
        <Link className={Style.servicos__cta__btn}
          href={"#cta_solar"}
          onClick={(e) => {
            e.preventDefault();
            Scroll.scroller.scrollTo('cta_solar', { duration: 500, delay: 0, smooth: true });
          }}

        >
          Simule Agora
        </Link>
      </div>
      <div className={Style.servicos__about}>
        <div className={Style.servicos__about__box1}>
          <h2 className={Style.servicos__about__box1__titulo}>
            Somos Mensch <span>Energia Solar</span>
          </h2>
          <h3 className={Style.servicos__about__box1__subtitulo}>
            Uma equipe profissional, comprometida e que respeita a sua família e seu dinheiro!
          </h3>
          <AboutEnergia />
          <SelosSolar />
        </div>
      </div>
      <div className={Style.servicos__social}>
        <h2 className={Style.servicos__social__titulo}>
          Impactando Vidas, esse é o nosso Compromisso de <span>Servir</span> e <span>Transformar</span>.
        </h2>
        <SocialSolar />
      </div>
    </section>
  )
};

export default ServicosEnergia;
