
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
          Sou Camilla, casada, e minha missão é ajudar você a conquistar uma vida mais longa, saudável e equilibrada. Acredito que o bem-estar vem de uma alimentação consciente, exercícios regulares e cuidado integral com mente e corpo.
        </p>

        <p className={Style.produtos__container__paragrafo}>
          Pequenas mudanças geram grandes resultados, transformando sua rotina e saúde. Com dedicação e experiência, compartilho orientações práticas e produtos que tornam essa jornada mais simples e eficaz.
        </p>

        <p className={Style.produtos__container__paragrafo}>
          Inspirando novos hábitos para mais disposição, equilíbrio e qualidade de vida, vamos juntos fazer da saúde sua maior prioridade!
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
