
import Image from 'next/image';
import Style from './ProdutosHealth.module.scss';

import bg from './assets/camilla2.png';


const ProdutosHealth = () => { 

  return (
    <section className={Style.produtos} id='camilla' aria-label='Saiba Mais sobre a Camilla Vieira'> 

      <div className={Style.produtos__container}>
        <h2 className={Style.produtos__container__titulo}>
          Camilla Vieira
        </h2>
        <p className={Style.produtos__container__paragrafo}> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam atque, repellat, architecto rem consequuntur dignissimos deserunt corporis id ab, iste aut alias officia accusamus harum voluptates. Porro voluptatibus adipisci officiis!
        </p>
        <p className={Style.produtos__container__paragrafo}> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam atque, repellat, architecto rem consequuntur dignissimos deserunt corporis id ab, iste aut alias officia accusamus harum voluptates. Porro voluptatibus adipisci officiis!
        </p>
        <p className={Style.produtos__container__paragrafo}> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam atque, repellat, architecto rem consequuntur dignissimos deserunt corporis id ab, iste aut alias officia accusamus harum voluptates. Porro voluptatibus adipisci officiis!
        </p>
      </div>

      <Image src={bg} alt='Camila' className={Style.produtos__bg} />
    </section>
  )
};

export default ProdutosHealth;
