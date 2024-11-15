
import classNames from 'classnames';
import Style from './Royal.module.scss';

import iso from './assets/iso_royal.svg';
import tipo from './assets/tipo_royal.svg';

import panela from './assets/panelas.png';
import pressao from './assets/paneladepressao.png';
import fervedor from './assets/fervedor.png';
import cutter from './assets/cutter.png';

import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useState } from 'react';


const Royal = () => {

  const [tela, setTela] = useState<number>(0);

  useEffect(() => {

    const handleResize = () => {
      setTela(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [tela])

  const produtos = [{
    nome: 'SISTEMA DE COZINHA PROFISSIONAL',
    img: panela
  },
  {
    nome: "PANELAS DE PRESSÃO",
    img: pressao
  },
  {
    nome: "FERVEDOR",
    img: fervedor
  },
  {
    nome: "CUTTER",
    img: cutter
  }
  ]

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    if (tela >= 840) {
      gsap.to('.iso', {
        x: 0,
        rotate: '360deg',
        opacity: 1,
        scrollTrigger: {
          trigger: ".royal",
          start: `top 70%`,
          end: `bottom 100%`,
          scrub: true,
        }
      })
    } else {
      gsap.to('.iso', {
        x: 0,
        rotate: '360deg',
        opacity: 1,
        scrollTrigger: {
          trigger: ".royal",
          start: `top 90%`,
          end: `bottom 200%`,
          scrub: true,
        }
      })
    }

    return () => {
      gsap.killTweensOf('.iso');
    }

  }, [tela]);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    if (tela >= 840) {
      gsap.to('.tipo', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".royal",
          start: `top 70%`,
          end: `bottom 100%`,
          scrub: true,
        }
      })
    } else {
      gsap.to('.tipo', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".royal",
          start: `top 90%`,
          end: `bottom 200%`,
          scrub: true,
        }
      })
    }

    return () => {
      gsap.killTweensOf('.tipo');
    }

  }, [tela]);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    if (tela >= 840) { 
      gsap.to('.apresentacao', {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".royal",
          start: `top 90%`,
          end: `bottom 100%`,
          scrub: true,
        }
      })
    } else { 
      gsap.to('.apresentacao', {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".royal",
          start: `top 90%`,
          end: `bottom 200%`,
          scrub: true,
        }
      })
    }

    return () => {
      gsap.killTweensOf('.apresentacao');
    }

  }, [tela])

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

      <div className={classNames({
        [Style.royal__produtos]: true,
        ['produtos']: true,
      })}>
        {produtos.map((p, index) =>
        (
          <div className={Style.royal__produtos__item} key={index}>
            <Image src={p.img} alt={p.nome} className={Style.royal__produtos__item__img} />
            <h4 className={Style.royal__produtos__item__titulo}>
              {p.nome}
            </h4>
          </div>
        )
        )}

      </div>

    </section>
  )
};

export default Royal;