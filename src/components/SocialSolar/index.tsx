
import Image from 'next/image';

import Style from './SocialSolar.module.scss';

import img from './assets/teste01.png';
import Link from 'next/link';

const SocialSolar = () => { 

  return (
    <div className={Style.social}>
      <div className={Style.social__textos}>
        <h3 className={Style.social__textos__titulo}>
          Kilo por <span>Kilo</span>
        </h3>
        <p className={Style.social__textos__paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed ullam eos quidem ipsum voluptates beatae, optio nisi necessitatibus, eligendi sunt debitis. Laboriosam quis et veritatis nam nulla quidem aliquam!
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
