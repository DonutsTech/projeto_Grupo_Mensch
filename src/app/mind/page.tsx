
import Style from './mind.module.scss';

import logo from './assets/mensch_mind.svg';
import inst from './assets/insta_icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Mind() {

  return (
    <div className={Style.mind}>
      <main className={Style.main}>
        <h1 className={Style.main__titulo}>Em Breve</h1>
        <Image src={logo} alt="Mensch Mind" width={100} height={100} className={Style.main__logo} />
        <p className={Style.main__texto}>
          Onde conhecimento e transformação se encontram! Nossa comunidade de cursos é para líderes, gestores e empreendedores que buscam crescer. Com aulas práticas, inspiramos cada pessoa a alcançar seu melhor, fazendo do aprendizado um estilo de vida e impacto.
        </p>
        <div className={Style.main__box}>
        <Link href={'/'} target='_top' className={Style.main__box__botao} title='Ir para a página inicial'>
          Grupo Mensch
        </Link>

        <Link href={'https://www.instagram.com/mensch.mind/'} target='_blank' rel='noreferrer' className={Style.main__box__insta} title='Siga-nos no Instagram'>
          <Image src={inst} alt='Instagram' width={24} height={24} />
        </Link>

        </div>
      </main>
    </div>
  )
};