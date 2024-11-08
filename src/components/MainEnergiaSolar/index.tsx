"use client";

import DoresSolar from '../DoresSolar';
import EnergiaSolar from '../EnergiaSolar';
import ProvaSolar from '../ProvaSolar';
import ServicosEnergia from '../ServicosEnergia';


import Style from './MainEnergiaSolar.module.scss';




const MainEnergiaSolar = () => { 

  return (
    <main className={Style.main}>
      <DoresSolar />
      <EnergiaSolar />
      <ServicosEnergia />
      <ProvaSolar />
    </main>
  )
};

export default MainEnergiaSolar;

