
import Style from './instalar.module.scss';

import logo from './assets/mensch_instalar.svg';
import inst from './assets/insta_icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Instalar() {

  return (
    <div className={Style.instalar}>
      <main className={Style.main}>
        <h1 className={Style.main__titulo}>Em Breve</h1>
        <Image src={logo} alt="Mensch Instalar" width={100} height={100} className={Style.main__logo} />
        <p className={Style.main__texto}>
          O apoio que o profissional precisa para um serviço seguro e de qualidade! Oferecemos materiais selecionados para instaladores de ar-condicionado, eletricistas e técnicos em refrigeração, com ferramentas de precisão e itens essenciais. Mais que produtos, damos suporte a quem busca crescer e entregar o melhor.
        </p>
        <div className={Style.main__box}>
          <Link href={'/'} target='_top' className={Style.main__box__botao} title='Ir para a página inicial'>
            Grupo Mensch
          </Link>

          <Link href={'https://www.instagram.com/mensch.instalar/'} target='_blank' rel='noreferrer' className={Style.main__box__insta} title='Siga-nos no Instagram'>
            <Image src={inst} alt='Instagram' width={24} height={24} />
          </Link>

        </div>
      </main>
    </div>
  )
};