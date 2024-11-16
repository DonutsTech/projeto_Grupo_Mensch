'use client';
import Camila from '../Camila';
import ProdutosHealth from '../ProdutosHealth';
import Royal from '../Royal';
import Style from './MainHealth.module.scss';

const MainHealth = () => { 

  return (
    <main className={Style.main}>
      <Camila />
      <Royal />
      <ProdutosHealth />
    </main>
  )
};

export default MainHealth;
