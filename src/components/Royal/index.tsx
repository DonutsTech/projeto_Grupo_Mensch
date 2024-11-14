
import classNames from 'classnames';
import Style from './Royal.module.scss';

import iso from './assets/iso_royal.svg';
import tipo from './assets/tipo_royal.svg';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';


const Royal = () => {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.iso', {
      x: 0,
      rotate: '360deg',
      opacity: 1,
      scrollTrigger: {
        trigger: ".royal",
        start: "top 600px",
        end: "bottom 900px",
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf('.iso');
    }

  }, []);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.tipo', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".royal",
        start: "top 600px",
        end: "bottom 900px",
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf('.tipo');
    }

  }, []);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.apresentacao', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".royal",
        start: "top 500px",
        end: "bottom 600px",
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf('.apresentacao');
    }

  }, [])

  return (
    <section className={classNames({
      [Style.royal]: true,
      ['royal']: true,
    })}>
      <h3 className={Style.royal__titulo}>
        Distribuidora <span>Autorizada</span>.
      </h3>
      <div className={classNames({
        [Style.royal__logo]: true,
        ['logo']: true,
      })}>
        <Image src={iso} alt='Iso' className={classNames({
          [Style.royal__logo__iso]: true,
          ['iso']: true,
        })} />
        <Image src={tipo} alt='Tipo' className={classNames({
          [Style.royal__logo__tipo]: true,
          ['tipo']: true,
        })} />
      </div>
      <div className={classNames({
        [Style.royal__apresentacao]: true,
        ['apresentacao']: true,
      })}
      >
        <h2 className={Style.royal__apresentacao__titulo}>
        Uma simples ideia se torna realidade!
        </h2>
        <p className={Style.royal__apresentacao__paragrafo}> 
        A Royal Prestige se compromete a oferecer produtos premium e serviços de excelência. Sua linha de utensílios de cozinha é reconhecida por sua alta qualidade e desempenho. Além disso, a empresa oferece um atendimento ao cliente personalizado e eficiente, garantindo uma experiência satisfatória para seus clientes. Como membro da Associação Brasileira de Empresas de Vendas Diretas, a empresa se compromete a seguir padrões éticos de conduta em todas as suas operações.
        </p>
      </div>

    </section>
  )
};

export default Royal;