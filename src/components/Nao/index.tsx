
import Image from 'next/image';
import Style from './Nao.module.scss';

import gif from './assets/404.gif';
import Link from 'next/link';

const Nao = () => {

  return (
    <div className={Style.nao}>
      <div className={Style.nao__textos}>
        <h2 className={Style.nao__textos__titulo}>
          <span>OPS!</span> Acho que você se perdeu.
        </h2>
        <h3 className={Style.nao__textos__subtitulo}>
          Página não encontrada <span>404</span>
        </h3>
      </div>
      <Image src={gif} alt='404' width={100} height={100} className={Style.nao__404} />
      <Link href={'/'} className={Style.nao__btn}>
        Grupo Mensch
      </Link>
    </div>
  )
};

export default Nao;
