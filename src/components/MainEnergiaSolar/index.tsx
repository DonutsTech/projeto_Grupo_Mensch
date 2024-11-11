"use client";

import ContatosSolar from '../ContatosSolar';
import CTASolar from '../CTASolar';
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
      <CTASolar />
      <ContatosSolar />
    </main>
  )
};

export default MainEnergiaSolar;

