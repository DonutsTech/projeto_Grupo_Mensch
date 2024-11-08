
import Image from 'next/image';
import Style from './ServicosEnergia.module.scss';

import logo from './assets/mensch_solar.svg';
import GaleriaEnergia from '../GaleriaEnergia';
import Link from 'next/link';
import AboutEnergia from '../AboutEnergia';

import tier1 from './assets/Tier1.svg';
import tigo from './assets/tigo.svg';
import aldo from './assets/aldo.svg';
import growatt from './assets/Growatt.png';


const ServicosEnergia = () => {

  return (
    <section className={Style.servicos} aria-label='Como é que funciona os serviços da Mensh Energia Solar' id='servicos_solar'>
      <div className={Style.servicos__head}>
        <h2 className={Style.servicos__head__titulo}>
          Uma Jornada <br />de <span>Servir</span> e <br /><span>Transformar</span>.
        </h2>
        <Image src={logo} alt="Mensh Energia Solar" className={Style.servicos__head__logo} />
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
        <Link className={Style.servicos__cta__btn} href={'/energiasolar'}>
          Simule Agora
        </Link>
      </div>
      <div className={Style.servicos__about}>
        <div className={Style.servicos__about__box1}>
          <h2 className={Style.servicos__about__box1__titulo}>
            Somos Mensch <span>Energia Solar</span>
          </h2>
          <h3 className={Style.servicos__about__box1__subtitulo}>
            Transformando a energia, transformando vidas
          </h3>
          <AboutEnergia />
          <div className={Style.servicos__about__box1__qualifica}>
            <div className={Style.servicos__about__box1__qualifica__tier1}>
              <h5 className={Style.servicos__about__box1__qualifica__tier1__texto}>
                Produtos com Certificação.
              </h5>
              <Link href={'https://www.portalsolar.com.br/noticias/tecnologia/equipamentos-fv/painel-solar-tier-1-entenda-a-classificacao-dos-fabricantes-de-modulos-fotovoltaicos'}
                className={Style.servicos__about__box1__qualifica__tier1__a}
                target='_blank'
                rel='noopener noreferrer'
                title='Oque é painel solar Tier 1'
              >
                <Image src={tier1} alt="Tier 1" className={Style.servicos__about__box1__qualifica__tier1__a__img} />
              </Link>
            </div>

            <div className={Style.servicos__about__box1__qualifica__tigo}>
              <h5 className={Style.servicos__about__box1__qualifica__tigo__texto}>
                Reconhecimento internacional.
              </h5>
              <Link href={'https://dol.com.br/dino/695449/tecnologia-da-tigo-energy-e-implantada-pela-mensch-engenharia-para-melhorar-a-producao-solar-no-brasil?d=1#'}
                className={Style.servicos__about__box1__qualifica__tigo__a}
                target='_blank'
                rel='noopener noreferrer'
                title='Reportagem Dol'
              >
                <Image src={tigo} alt="Tier 1" className={Style.servicos__about__box1__qualifica__tigo__a__img} />
              </Link>
            </div>

            <div className={Style.servicos__about__box1__qualifica__aldo}>
              <h5 className={Style.servicos__about__box1__qualifica__aldo__texto}>
                Top 100 parceiros da Aldo Solar 2021.
              </h5>
              <Link href={"https://www.aldo.com.br/blog/3o-dia-da-aldo-na-intersolar-2021/"}
                className={Style.servicos__about__box1__qualifica__aldo__a}
                target='_blank'
                rel='noopener noreferrer'
                title='aldo.blog'
              >
                <Image src={aldo} alt="Tier 1" className={Style.servicos__about__box1__qualifica__aldo__a__img} />
              </Link>
            </div>

            <div className={Style.servicos__about__box1__qualifica__growatt}>
              <h5 className={Style.servicos__about__box1__qualifica__growatt__texto}>
                Top 10 Empresas do Brasil pela Growatt 2022.
              </h5>
              <Link href={"https://www.instagram.com/p/CiLYsMGLegx/?img_index=4"}
                className={Style.servicos__about__box1__qualifica__growatt__a}
                target='_blank'
                rel='noopener noreferrer'
                title='Postagem no instagram da Growatt foto 4'
              >
                <Image src={growatt} alt="Tier 1" className={Style.servicos__about__box1__qualifica__growatt__a__img} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};

export default ServicosEnergia;
