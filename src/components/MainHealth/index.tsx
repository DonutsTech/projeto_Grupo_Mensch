'use client';
import Camila from '../Camila';
import ContatosHealth from '../ContatosHealth';
import ProdutosHealth from '../ProdutosHealth';
import ProvaHealth from '../ProvaHealth';
import Receitas from '../Receitas';
import Royal from '../Royal';
import Saudavel from '../Saudavel';
import Style from './MainHealth.module.scss';

const MainHealth = () => { 

  return (
    <main className={Style.main}>
      <Camila />
      <Royal />
      <ProdutosHealth />
      <ProvaHealth />
      <Saudavel />
      <Receitas />
      <ContatosHealth />
    </main>
  )
};

export default MainHealth;
