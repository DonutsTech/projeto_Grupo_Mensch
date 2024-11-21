'use client';
import Image from 'next/image';
import Style from './Camila.module.scss';
import foto from './assets/Camila.png';
import instagram from './assets/insta_icon.svg';
import Link from 'next/link';
import Animation from './Animation';
import Scroll from 'react-scroll';


const Camila = () => { 

  return (
    <section className={Style.consultora} aria-label='Sobre a Mensch Health'>
      <div className={Style.consultora__content}> 
        <div className={Style.consultora__content__box} >
          <h2 className={Style.consultora__content__box__titulo}>
            Titulo
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
              <Link
                href={'#contatos__health'}
                className={Style.consultora__content__box__btns__btn}
                onClick={(e) => {
                  e.preventDefault();
                  Scroll.scroller.scrollTo('contatos__health', { duration: 500, delay: 0, smooth: true });
                }

                }
              >
                Agendar uma Visita
              </Link>
              <Link href={'https://www.instagram.com/mensch.health/'} target='_blank' rel='noopener noreferrer' title='Siga a Mensch Health no Instagram' >
                <Image src={instagram} alt='Instagram' className={Style.consultora__content__box__btns__icon} />
              </Link>
            </div>
        </div>
        <Image src={foto} alt='Camila' className={Style.consultora__content__foto} />
      </div>
      <Animation />
    </section>
  )
};

export default Camila;
