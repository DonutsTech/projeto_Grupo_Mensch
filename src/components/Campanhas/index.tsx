
import Image from 'next/image';
import Style from './Campanhas.module.scss';

import simbolo from './assets/simbolo_base.svg';
import instagram from './assets/instagram.svg';
import arrow from './assets/simbolo_front.svg';

import teste01 from './assets/teste01.png';
import teste02 from './assets/teste02.png';
import teste03 from './assets/teste03.png';


import ckto1 from './assets/CKTO1.png';
import ckto2 from './assets/CKTO2.png';
import ckto3 from './assets/CKTO3.png';


import escolinha1 from './assets/escolinha1.png';
import escolinha2 from './assets/escolinha2.png';
import escolinha3 from './assets/escolinha3.png';






import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';


const Campanhas = () => {

  const [contFoto, setContFoto] = useState<number>(0);
  const [contSlide, setContSlide] = useState<number>(1)
  const [crono, setCrono] = useState<number>(30);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {

    const timerCrono = setTimeout(() => {
      if (!pausado) {
        setCrono(crono - 1)
      }
    }, 1000);

    if (crono === 0) {
      setCrono(30);
    }

    return () => clearTimeout(timerCrono);

  }, [crono, pausado])

  useEffect(() => {

    const timerFoto = setTimeout(() => {
      if (contFoto === 0) {
        setContFoto(1);
      } else if (contFoto === 1) {
        setContFoto(2);
      } else if (contFoto === 2) {
        setContFoto(0);
      }
    }, 5000);

    return () => clearTimeout(timerFoto);

  }, [contFoto]);


  useEffect(() => {
    const timerSlide = setTimeout(() => {
      if (!pausado) {
        if (contSlide === 1) {
          setContSlide(2);
          setContFoto(0);
          setCrono(30);
        } else if (contSlide === 2) {
          setContSlide(3);
          setContFoto(0);
          setCrono(30);
        } else if (contSlide === 3) {
          setContSlide(4);
          setContFoto(0);
          setCrono(30);
        } else if (contSlide === 4) {
          setContSlide(1);
          setContFoto(0);
          setCrono(30);
        }
      }
    }, 30000);

    return () => clearTimeout(timerSlide);
  }, [contSlide, pausado]);


  const campanhas = [
    {
      id: 1,
      titulo: 'Kilo por',
      span: ' Kilo',
      periodo: "Mensalmente",
      descricao: "Na campanha da Mensch Energia Solar, a cada kilowatt vendido, doamos um kilo de alimento para os que mais necessitam. Essa ação reflete nosso compromisso de Impactar Vidas, unindo compromisso social e solidariedade para um futuro melhor e mais humano.",
      fotos: [
        teste01,
        teste02,
        teste03
      ],
      link: 'https://www.instagram.com/p/DBZ3qUjRtOt/'
    },
    {
      id: 2,
      titulo: 'Apoio ao ',
      span: ' CTKO',
      periodo: "Contínuo",
      descricao: "A parceria entre o Grupo Mensch e o time de vôlei é transformadora. Com essa conexão humana, impactamos vidas dentro e fora das quadras, promovendo crescimento e transformação para todos.",
      fotos: [
        ckto1,
        ckto2,
        ckto3,
      ],
      link: 'https://www.instagram.com/ctkovoleitijucano/'
    },
    {
      id: 3,
      titulo: 'Apoio a ',
      span: 'Escolinha Gol para vida',
      periodo: "Contínuo",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?",
      fotos: [
        escolinha1,
        escolinha2,
        escolinha3
      ],
      link: 'https://www.instagram.com/escolinhagolparavida/'
    },
    {
      id: 4,
      titulo: 'Diversas contribuiçoes ',
      span: ' individuais',
      periodo: "Pontuais",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?",
      fotos: [
        teste01,
        teste02,
        teste03
      ],
      link: 'https://www.instagram.com/grupo.mensch/'
    },

  ];


  return (
    <div className={Style.campanhas}>

      {campanhas.map(c =>
        <div className={classNames({
          [Style.campanhas__slide]: true,
          [Style.campanhas__slide__ativo]: contSlide === c.id,

        })} key={c.id}>
          <div className={Style.campanhas__slide__imagemBox}>
            <Image src={c.fotos[contFoto]} alt='foto' className={Style.campanhas__slide__imagemBox__foto} />
            <Image src={simbolo} alt='simbolo' className={Style.campanhas__slide__imagemBox__simbolo} />
          </div>
          <div className={Style.campanhas__slide__textBox}>
            <h2 className={Style.campanhas__slide__textBox__titulo}>{c.titulo}<span>{c.span}</span></h2>
            <h3 className={Style.campanhas__slide__textBox__periodo}>{c.periodo}</h3>
            <p className={Style.campanhas__slide__textBox__texto}>{c.descricao}</p>
            <Link href={c.link} target='_blank' rel='noreferrer' title={`Siga a pagina do instagram e siba mais sobre o ${c.titulo}`}>
              Siga-nos <Image src={instagram} alt='instagram' />
            </Link>
          </div>
        </div>
      )}

      <div className={Style.campanhas__btn}>
        <Image
          src={arrow}
          alt='arrow'
          className={Style.campanhas__btn__prev}
          title='Voltar para ação anterior'
          onClick={() => {
            setContFoto(0);
            setCrono(30);
            setPausado(false);
            if (contSlide > 1) {
              setContSlide(contSlide - 1);
            } else {
              setContSlide(campanhas.length);
            }
          }}
        />
        <Image
          src={arrow}
          alt='arrow'
          className={Style.campanhas__btn__next}
          title='Ir para a próxima ação'
          onClick={() => {
            setContFoto(0);
            setCrono(30);
            setPausado(false);
            if (contSlide < campanhas.length) {
              setContSlide(contSlide + 1);

            } else {
              setContSlide(1);
            }
          }}
        />
      </div>

      <div className={Style.campanhas__cronometro}
        onClick={() => {
          setPausado(!pausado)
          setCrono(30);
        }}
      >
        <div className={classNames({
          [Style.campanhas__cronometro__borda]: true,
          [Style.campanhas__cronometro__pausado]: pausado,
        })} />
        <p>{pausado ? ' | | ' : crono.toString().padStart(2, '0')}</p>
      </div>
    </div>
  )
};

export default Campanhas;


