
import Image from 'next/image';
import Style from './Camila.module.scss';
import foto from './assets/Camila.png';
import instagram from './assets/insta_icon.svg';
import Link from 'next/link';

const Camila = () => { 

  return (
    <section className={Style.consultora} aria-label='Sobre a Camila'>
      <div className={Style.consultora__content}> 
        <div className={Style.consultora__content__box} >
          <h2 className={Style.consultora__content__box__titulo}>
            Camila Vieira
          </h2>

          <p className={Style.consultora__content__box__paragrafo}> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae atque sint, ab, aliquid dicta rerum tenetur sunt cumque ipsam quis assumenda? Eligendi iste, sapiente nihil molestiae dignissimos deleniti itaque nobis?
          </p>
          <p className={Style.consultora__content__box__paragrafo}> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae atque sint, ab, aliquid dicta rerum tenetur sunt cumque ipsam quis assumenda? Eligendi iste, sapiente nihil molestiae dignissimos deleniti itaque nobis?
          </p>
          <p className={Style.consultora__content__box__paragrafo}> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae atque sint, ab, aliquid dicta rerum tenetur sunt cumque ipsam quis assumenda? Eligendi iste, sapiente nihil molestiae dignissimos deleniti itaque nobis?
          </p>

            <div className={Style.consultora__content__box__btns}>
              <button className={Style.consultora__content__box__btns__btn}>
                Agendar uma Visita
              </button>
              <Link href={'https://www.instagram.com/camillavieira.mensch/'} target='_blank' rel='noopener noreferrer' title='Siga a Camila no Instagram' >
                <Image src={instagram} alt='Instagram' className={Style.consultora__content__box__btns__icon} />
              </Link>
            </div>
        </div>
        <Image src={foto} alt='Camila' className={Style.consultora__content__foto} />
      </div>
    </section>
  )
};

export default Camila;
