'use client';

import Essencia from '../Essencia';
import Marcas from '../Marcas';
import Style from './Main.module.scss';


const Main = () => {

  return (
    <main className={Style.main}>
      <div className={Style.main__detalhe} />
      <Essencia />
      <Marcas />
    </main>
  )
};

export default Main;