'use client';

import Acao from '../Acao';
import Style from './MainSocial.module.scss';

const MainSocial = () => { 

  return (
    <main className={Style.main}>
      <div className={Style.main__detalhe} />
      <Acao />
    </main>
  )
};

export default MainSocial;
