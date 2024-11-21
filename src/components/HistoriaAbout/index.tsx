
import classNames from 'classnames';
import Style from './HistoriaAbout.module.scss';

import img1 from './assets/comeco.png';
import img2 from './assets/consolidacao.jpg';
import img3 from './assets/futuro.png';

import pin from './assets/pin.svg';
import Image from 'next/image';


const HistoriaAbout = () => {

  return (
    <section className={Style.historia} aria-label='Nossa História'>
      <h2 className={Style.historia__titulo}>Nossa <span>Jornada</span>:</h2>

      <div className={Style.historia__content}>

        <div className={classNames({
          [Style.historia__content__box]: true,
          [Style.historia__content__box_esq]: true,
        })}>
          <div className='historia__content__box__img'>
            <Image src={img1} alt='Imagem de fase' className={Style.historia__content__box__img__img} />
          </div>
          <div className={Style.historia__content__box__texto}>
            <h3 className={Style.historia__content__box__texto__fase} ><Image src={pin} alt='pin' /> O Começo</h3>
            <p className={Style.historia__content__box__texto__paragrafo} >
              <span>A Mensch nasceu</span> em 2017 do ardente desejo de Alex,
              Jéssica e Otavio de criar uma empresa que priorizasse
              a felicidade dos colaboradores, provando ser possível
              prosperar com integridade e cuidado mútuo,
              impactando muitas vidas.
            </p>
          </div>
        </div>

        <div className={classNames({
          [Style.historia__content__box]: true,
          [Style.historia__content__box_dir]: true,
        })}>
          <div className='historia__content__box__img'>
            <Image src={img2} alt='Imagem de fase' className={Style.historia__content__box__img__img} />
          </div>
          <div className={Style.historia__content__box__texto}>
            <h3 className={Style.historia__content__box__texto__fase} >Consolidação <Image src={pin} alt='pin' /></h3>
            <p className={Style.historia__content__box__texto__paragrafo} >
              <span>A Mensch é </span>mais que uma empresa; é uma filosofia de
              vida criada para fazer a diferença. Tornou-se solo
              fértil para sonhos, unindo pessoas em apoio mútuo
              e transformação. Nosso propósito é claro: honrar a
              Deus através do trabalho.</p>
          </div>
        </div>

        <div className={classNames({
          [Style.historia__content__box]: true,
          [Style.historia__content__box_esq]: true,
        })}>
          <div className='historia__content__box__img'>
            <Image src={img3} alt='Imagem de fase' className={Style.historia__content__box__img__img} />
          </div>
          <div className={Style.historia__content__box__texto}>
            <h3 className={Style.historia__content__box__texto__fase} ><Image src={pin} alt='pin' /> Futuro</h3>
            <p className={Style.historia__content__box__texto__paragrafo} >
              <span>A Mensch será</span> reconhecida pelo significado que carrega,
              inspirando pessoas a servir, trazer sorrisos, aliviar
              dores e espalhar felicidade. Nossa missão é de todos
              que enxergam a vida com o um presente e honram
              Aquele que a deu com Amor.</p>
          </div>
        </div>

      </div>

    </section >
  )
};

export default HistoriaAbout;

