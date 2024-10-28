'use client';

import Essencia from '../Essencia';
import Style from './Main.module.scss';


const Main = () => {

  return (
    <main className={Style.main}>
      <div className={Style.main__detalhe} />
      <Essencia />
    </main>
  )
};

export default Main;