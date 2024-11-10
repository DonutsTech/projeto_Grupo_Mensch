'use client';

import Acao from '../Acao';
import ChamadaSocial from '../ChamadaSocial';
import Style from './MainSocial.module.scss';

const MainSocial = () => { 

  return (
    <main className={Style.main}>
      {/* <div className={Style.main__detalhe} /> */}
      <Acao />
      <ChamadaSocial />
    </main>
  )
};

export default MainSocial;
