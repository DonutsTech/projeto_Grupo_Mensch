
import Link from 'next/link';
import Style from './ChamadaSocial.module.scss';
// import Image from 'next/image';
// import email from './assets/email_iconSocial.svg';

const ChamadaSocial = () => { 

  return (
    <section className={Style.chamadaSocial}> 
      <div className={Style.chamadaSocial__content}> 
        <h2 className={Style.chamadaSocial__content__titulo}> 
          Venha fazer parte desta <span>Linda Jornada</span>.
        </h2>
        <p className={Style.chamadaSocial__content__texto}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit quam consequuntur odio qui quia, vero nobis! Optio temporibus quo porro quas atque officia aliquam necessitatibus, ducimus ipsum tempore consequuntur.
        </p>


        <Link href={"/#contatos__mensch"} className={Style.chamadaSocial__content__btn} title='Enviar email para contato@grupomensh.com'>
          Entre em contato
        </Link>
      </div>
    </section>
  )
};

export default ChamadaSocial;
