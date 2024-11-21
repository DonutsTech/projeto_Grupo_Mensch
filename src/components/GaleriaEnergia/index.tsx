'use client';

import Image from 'next/image';
import Style from './GaleriaEnergia.module.scss';

import pin from './assets/pin_energia.svg';

import residencia from './assets/residencia.jpg'
import seloResidencia from './assets/selo_residencia.svg';

import empresa from './assets/empresa.png';
import seloEmpresa from './assets/selo_negocio.svg';

import rural from './assets/rural.jpg';
import seloRural from './assets/selo_rural.svg';

import { useEffect, useState } from 'react';

const GaleriaEnergia = () => {
  const [estado, setEstado] = useState(1);

  useEffect(() => {

    const timeEstado = setTimeout(() => {
      if (estado === 1) {
        setEstado(2);
      } else if (estado === 2) {
        setEstado(3);
      } else if (estado === 3) {
        setEstado(1);
      }
    }, 7000);

    return () => clearTimeout(timeEstado);

  }, [estado])





  return (
    <div className={Style.galeria}>
      {estado === 1 && (
        <div className={Style.galeria__content}>
          <Image src={seloResidencia} draggable="false" alt="Selo com energia solar da Mensch" className={Style.galeria__content__selo} />
          <Image src={residencia}  draggable="false" alt="Residencia com energia solar da Mensch" className={Style.galeria__content__img} />

          <div className={Style.galeria__content__ficha}>
            <h3 className={Style.galeria__content__ficha__titulo}>
              Para a sua <span>Casa</span>.
            </h3>
            <p className={Style.galeria__content__ficha__texto}>
              Economize até 92% na sua conta de energia!
            </p>
            <ul className={Style.galeria__content__ficha__lista}>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Economia Garantida.
              </li>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Vida útil +25 anos.
              </li>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Valorização do imóvel.
              </li>
            </ul>
          </div>
        </div>
      )}
      {estado === 2 && (
        <div className={Style.galeria__content}>
          <Image src={seloEmpresa} draggable="false" alt="Selo com energia solar da Mensch" className={Style.galeria__content__selo} />
          <Image src={empresa} draggable="false" alt="Empresa com energia solar da Mensch" className={Style.galeria__content__img} />

          <div className={Style.galeria__content__ficha}>
            <h3 className={Style.galeria__content__ficha__titulo}>
              Para sua <span>Empresa</span>.
            </h3>
            <p className={Style.galeria__content__ficha__texto}>
              Reduza Custos e Aumente a Eficiência
            </p>
            <ul className={Style.galeria__content__ficha__lista}>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Redução de Despesas Operacionais.
              </li>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Energia Confiável.
              </li>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Responsabilidade Ambiental.
              </li>
            </ul>
          </div>
        </div>
      )}
      {estado === 3 && (
        <div className={Style.galeria__content}>
          <Image src={seloRural} draggable="false" alt="Selo com energia solar da Mensch" className={Style.galeria__content__selo} />
          <Image src={rural} draggable="false" alt="Fazenda com energia solar da Mensch" className={Style.galeria__content__img} />

          <div className={Style.galeria__content__ficha}>
            <h3 className={Style.galeria__content__ficha__titulo}>
              Para sua <span>Fazenda</span>.
            </h3>
            <p className={Style.galeria__content__ficha__texto}>
              Aproveite o sol para uma fazenda sustentável.
            </p>
            <ul className={Style.galeria__content__ficha__lista}>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Tecnologia de Ponta.
              </li>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Conservação do Ambiente.
              </li>
              <li className={Style.galeria__content__ficha__lista__item}>
                <Image src={pin} alt="Pin" className={Style.galeria__content__ficha__lista__item__pin} />
                Economia em Combustíveis Fósseis.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
};

export default GaleriaEnergia;
