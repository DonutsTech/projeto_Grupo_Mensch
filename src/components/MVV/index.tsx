
import Style from './MVV.module.scss';

import pin from './assets/pin.svg';
import Image from 'next/image';

const MVV = () => {

  return (
    <section className={Style.mvv} aria-label='Missão Visão e Valores do Grupo Mensch'>

      <div className={Style.mvv__content}>
        <div className={Style.mvv__content__mv}>
          <div className={Style.mvv__content__mv__missao}>
            <h3 className={Style.mvv__content__mv__missao__titulo}>
              Nossa <span>Missão</span>: </h3>
            <p className={Style.mvv__content__mv__missao__paragrafo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?
            </p>
          </div>
          <div className={Style.mvv__content__mv__visao}>
            <h3 className={Style.mvv__content__mv__visao__titulo}>
              Nossa <span>Visão</span>: </h3>
            <p className={Style.mvv__content__mv__visao__paragrafo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?
            </p>
          </div>
        </div>
      <div className={Style.mvv__content__valores}>
        <h3 className={Style.mvv__content__valores__titulo}>
          Nossos <span>Valores</span>: </h3>
        <dl className={Style.mvv__content__valores__dl}>

          <dt className={Style.mvv__content__valores__dl__dt}>
            <Image src={pin} alt='pin' /> Titulo
          </dt>
          <dd className={Style.mvv__content__valores__dl__dt__dd}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus.
          </dd>

          <dt className={Style.mvv__content__valores__dl__dt}>
            <Image src={pin} alt='pin' /> Titulo
          </dt>
          <dd className={Style.mvv__content__valores__dl__dt__dd}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus.
          </dd>
          
          <dt className={Style.mvv__content__valores__dl__dt}>
            <Image src={pin} alt='pin' /> Titulo
          </dt>
          <dd className={Style.mvv__content__valores__dl__dt__dd}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus.
          </dd>

          <dt className={Style.mvv__content__valores__dl__dt}>
            <Image src={pin} alt='pin' /> Titulo
          </dt>
          <dd className={Style.mvv__content__valores__dl__dt__dd}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus.
          </dd>

          <dt className={Style.mvv__content__valores__dl__dt}>
            <Image src={pin} alt='pin' /> Titulo
          </dt>
          <dd className={Style.mvv__content__valores__dl__dt__dd}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus.
          </dd>

          <dt className={Style.mvv__content__valores__dl__dt}>
            <Image src={pin} alt='pin' /> Titulo
          </dt>
          <dd className={Style.mvv__content__valores__dl__dt__dd}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus.
          </dd>

        </dl>
      </div>
      </div>
    </section>
  )
};

export default MVV;
