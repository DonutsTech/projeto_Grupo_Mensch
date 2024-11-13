'use client';
import Camila from '../Camila';
import Royal from '../Royal';
import Style from './MainHealth.module.scss';

const MainHealth = () => { 

  return (
    <main className={Style.main}>
      <Camila />
      <Royal />
    </main>
  )
};

export default MainHealth;
