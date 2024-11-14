
import Image from 'next/image';
import Style from './ProdutosHealth.module.scss';

import bg from './assets/camilla.png';
import SlideProdutos from './SlideProdutos';
import selo from './assets/garantia.svg';

const ProdutosHealth = () => { 

  return (
    <section className={Style.produtos}> 
    <Image src={selo} alt='Selo' className={Style.produtos__selo} />
    <div className={Style.produtos__slide}>
      <SlideProdutos />
    </div>
      <Image src={bg} alt='Camila' className={Style.produtos__bg} />
    </section>
  )
};

export default ProdutosHealth;
