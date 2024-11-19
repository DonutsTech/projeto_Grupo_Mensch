
import Image from 'next/image';

import Style from './SocialSolar.module.scss';

import img from './assets/kiloporkilo.png';
import Link from 'next/link';

const SocialSolar = () => {

  return (
    <div className={Style.social}>
      <div className={Style.social__textos}>
        <h3 className={Style.social__textos__titulo}>
          Kilo por <span>Kilo</span>
        </h3>
        <p className={Style.social__textos__paragrafo}>
          Na campanha da Mensch Energia Solar, a cada kilowatt vendido, doamos um kilo de alimento para os que mais necessitam. Essa ação reflete nosso compromisso de Impactar Vidas, unindo compromisso social e solidariedade para um futuro melhor e mais humano.
        </p>
        <Link
          className={Style.social__textos__btn}
          href={'/social'}
          target='_blank'
          rel='noopener noreferrer'
          title='Vem Ser Mensch'
        >
          Vem Ser Mensch
        </Link>
      </div>
      <Image src={img} alt="Kilo por Kilo" className={Style.social__img} />

    </div>
  )
};

export default SocialSolar;
