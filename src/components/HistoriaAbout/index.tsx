
import classNames from 'classnames';
import Style from './HistoriaAbout.module.scss';

import img1 from './assets/teste01.png';
import img2 from './assets/consolidacao.jpg';
import img3 from './assets/futuro.jpg';

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
              A Mensch nasceu de um sonho de Alex, Jéssica e Otavio: valorizar as pessoas. Desde 2017, superou desafios, mantendo firme seu propósito. É uma empresa de nomes, não de números, onde cada colaborador é único.
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
            <p className={Style.historia__content__box__texto__paragrafo} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
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
            <p className={Style.historia__content__box__texto__paragrafo} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
          </div>
        </div>

      </div>

    </section >
  )
};

export default HistoriaAbout;

