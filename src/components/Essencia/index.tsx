'use client';

import Style from './Essencia.module.scss';

const Essencia = () => { 


  return (
    <section className={Style.essencia}>
      <div className={Style.essencia__content} > 
        <h2 className={Style.essencia__content__title}>Chamada sobre a Essência da Mensch!</h2>
        <p className={Style.essencia__content__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor quidem eum, repellendus ad blanditiis rerum a itaque voluptates mollitia, aut consectetur sint nisi placeat sed reprehenderit quos, temporibus ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis impedit iste incidunt inventore asperiores architecto nam odit maiores sit reprehenderit quaerat voluptas quasi corrupti, velit praesentium error provident laborum?</p>

        <button className={Style.essencia__content__btn}>Sobre Nós</button>
      </div>
    </section>
  )
}

export default Essencia;
