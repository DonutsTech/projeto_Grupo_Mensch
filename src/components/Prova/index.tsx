'use client';

import Image from 'next/image';
import bg from './assets/prova_img.png';

import perfil from './assets/perfil_corte.jpg';
import aspas from './assets/aspas.svg';
import Link from 'next/link';
import Style from './Prova.module.scss';



const Prova = () => {

  const coments = [
    {
      id: 1,
      nome: 'jonh Doo',
      foto: perfil,
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.',
      link: 'https://www.instagram.com/grupo.mensch/'
    },
    {
      id: 2,
      nome: 'jonh Doo',
      foto: perfil,
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.',
      link: 'https://www.instagram.com/grupo.mensch/'
    },
    {
      id: 3,
      nome: 'jonh Doo',
      foto: perfil,
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.',
      link: 'https://www.instagram.com/grupo.mensch/'
    },
    {
      id: 4,
      nome: 'jonh Doo',
      foto: perfil,
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.',
      link: 'https://www.instagram.com/grupo.mensch/'
    },
    {
      id: 5,
      nome: 'jonh Doo',
      foto: perfil,
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.',
      link: 'https://www.instagram.com/grupo.mensch/'
    },
  ]

  return (
    <section className={Style.prova} aria-label='Provas Sociais'>
      <h2 className={Style.prova__title}>Veja o que nossos <span>parceiros</span> têm a dizer sobre nossa <span>jornada</span>.</h2>
      <div className={Style.prova__content}>
        {coments.map(coment => (
            <div className={Style.prova__content__card} key={coment.id}>
              <div className={Style.prova__content__card__foto} >
                <Image src={coment.foto} alt={`foto de ${coment.nome}`} className={Style.prova__content__card__foto__img} />
              </div>
              <p className={Style.prova__content__card__text}>
                {coment.texto}
              </p>
              <Link href={coment.link} className={Style.prova__content__card__link} target='_blank' rel='noopener' title={`Acesse o perfil de ${coment.nome}`}>
                {coment.nome}
              </Link>
              <Image src={aspas} alt='aspas' className={Style.prova__content__card__aspas1} />
              <Image src={aspas} alt='aspas' className={Style.prova__content__card__aspas2} />
            </div>
        ))}
      </div>


      <Image src={bg} alt='Provas Sociais' className={Style.prova__bg} />
    </section>
  )
};

export default Prova;
