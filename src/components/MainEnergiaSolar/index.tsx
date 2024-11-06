

import DoresSolar from '../DoresSolar';
import EnergiaSolar from '../EnergiaSolar';
import ServicosEnergia from '../ServicosEnergia';


import Style from './MainEnergiaSolar.module.scss';




const MainEnergiaSolar = () => { 

  return (
    <main className={Style.main}>
      <DoresSolar />
      <EnergiaSolar />
      <ServicosEnergia />
    </main>
  )
};

export default MainEnergiaSolar;

