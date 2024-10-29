'use client';

import Essencia from '../Essencia';
import Marcas from '../Marcas';
import Prova from '../Prova';
import Style from './Main.module.scss';


const Main = () => {

  return (
    <main className={Style.main}>
      <div className={Style.main__detalhe} />
      <Essencia />
      <Marcas />
      <Prova />
    </main>
  )
};

export default Main;