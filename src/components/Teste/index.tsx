
import Image from 'next/image';
import Style from './Teste.module.scss';

import gif from './assets/404.gif';

const Teste = () => {

  return (
    <div className={Style.teste}>
      <Image src={gif} alt='404' width={100} height={100} className={Style.teste__404} />
    </div>
  )
};

export default Teste;
