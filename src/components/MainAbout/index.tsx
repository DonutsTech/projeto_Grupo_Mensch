'use client';

import HistoriaAbout from '../HistoriaAbout';
import SectionAbout01 from '../SectionAbout01';
import Style from './MainAbout.module.scss';

const MainAbout = () => {

  return (
    <main className={Style.main}>
      <div className={Style.main__detalhe} />
      <SectionAbout01 />
      <HistoriaAbout />
    </main>
  )
};

export default MainAbout;
