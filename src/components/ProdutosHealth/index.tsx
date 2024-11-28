
import Image from 'next/image';
import Style from './ProdutosHealth.module.scss';

import insta from './assets/insta_icon.svg';

import bg from './assets/camilla2.png';
import Link from 'next/link';


const ProdutosHealth = () => {

  return (
    <section className={Style.produtos} id='camilla' aria-label='Saiba Mais sobre a Camilla Vieira'>

      <div className={Style.produtos__container}>
        <h2 className={Style.produtos__container__titulo}>
          Camilla Vieira
        </h2>
        <p className={Style.produtos__container__paragrafo}>
          Sou Camilla, casada, e minha missão é ajudar você a ter uma vida longa, saudável e com mais qualidade de tempo. Acredito que o bem-estar nasce de uma alimentação equilibrada, exercícios regulares e cuidado com a mente e o corpo. Pequenas mudanças podem gerar grandes resultados, transformando sua rotina e sua saúde.
        </p>
        <p className={Style.produtos__container__paragrafo}>
          Com minha experiência, compartilho orientações práticas e produtos que facilitam essa jornada de transformação. Meu objetivo é inspirar você a adotar hábitos que priorizem sua saúde, trazendo mais disposição e equilíbrio para o dia a dia.
        </p>
        <p className={Style.produtos__container__paragrafo}>
        Juntos, podemos alcançar seus objetivos de bem-estar e fazer da saúde sua maior prioridade!
        </p>
        <div className={Style.produtos__container__rede}> 
          <Link 
            href={'https://www.instagram.com/camillavieira.mensch/'}
            target="_blank"
            rel="noopener noreferrer"
            title='Siga a Camilla Vieira no Instagram'
            className={Style.produtos__container__rede__icon}
          >
            <Image src={insta} 
            alt='Instagram Icon' width={48} height={48} 
            className={Style.produtos__container__rede__icon__img}
            />
          </Link>
          <p className={Style.produtos__container__rede__texto}>
            @camillavieira.mensch
          </p>
        </div>
      </div>

      <Image src={bg} alt='Camila' className={Style.produtos__bg} />
    </section>
  )
};

export default ProdutosHealth;
