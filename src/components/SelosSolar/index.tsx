
import classNames from 'classnames';
import Style from './SelosSolar.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import tier1 from './assets/Tier1.svg';
import tigo from './assets/tigo.svg';
import aldo from './assets/aldo.svg';
import growatt from './assets/Growatt.png';


const SelosSolar = () => {

  return (
    <div className={Style.qualifica}>

      <div className={classNames({
        [Style.qualifica__box]: true,
        [Style.qualifica__box_tier1]: true,
      })}>
        <Link
          className={Style.qualifica__box__a}
          href={"https://www.portalsolar.com.br/noticias/tecnologia/equipamentos-fv/painel-solar-tier-1-entenda-a-classificacao-dos-fabricantes-de-modulos-fotovoltaicos"}
          target="_blank"
          rel="noopener noreferrer"
          title="Oque é painel solar Tier 1"
        >
          <Image
            src={tier1}
            alt='Tier 1'
            className={Style.qualifica__box__a__img}
          />
        </Link>
        <p className={Style.qualifica__box__texto}>
          Produtos com Certificação.
        </p>
      </div>

      <div className={classNames({
        [Style.qualifica__box]: true,
        [Style.qualifica__box_tigo]: true,
      })}>
        <Link
          className={Style.qualifica__box__a}
          href={"https://dol.com.br/dino/695449/tecnologia-da-tigo-energy-e-implantada-pela-mensch-engenharia-para-melhorar-a-producao-solar-no-brasil?d=1#"}
          target="_blank"
          rel="noopener noreferrer"
          title="Reportagem Dol"
        >
          <Image
            src={tigo}
            alt='Tigo'
            className={Style.qualifica__box__a__img}
          />
        </Link>
        <p className={Style.qualifica__box__texto}>
          Reconhecimento internacional.
        </p>
      </div>

      <div className={classNames({
        [Style.qualifica__box]: true,
        [Style.qualifica__box_aldo]: true,
      })}>
        <Link
          className={Style.qualifica__box__a}
          href={"https://www.aldo.com.br/blog/3o-dia-da-aldo-na-intersolar-2021/"}
          target="_blank"
          rel="noopener noreferrer"
          title="Blog da aldo Solar"
        >
          <Image
            src={aldo}
            alt='aldo'
            className={Style.qualifica__box__a__img}
          />
        </Link>
        <p className={Style.qualifica__box__texto}>
          Top 100 parceiros da <br />Aldo Solar 2021.
        </p>
      </div>

      <div className={classNames({
        [Style.qualifica__box]: true,
        [Style.qualifica__box_growatt]: true,
      })}>
        <Link
          className={Style.qualifica__box__a}
          href={"https://www.instagram.com/p/CiLYsMGLegx/?img_index=4"}
          target="_blank"
          rel="noopener noreferrer"
          title="Postagem no instagram da Growatt foto 4"
        >
          <Image
            src={growatt}
            alt='Growatt'
            className={Style.qualifica__box__a__img}
          />
        </Link>
        <p className={Style.qualifica__box__texto}>
          Top 10 Empresas do Brasil pela Growatt 2022.
        </p>
      </div>

    </div>
  )
};

export default SelosSolar;










{/* <div className={Style.servicos__about__box1__qualifica}>
<div className={Style.servicos__about__box1__qualifica__tier1}>
  <h5 className={Style.servicos__about__box1__qualifica__tier1__texto}>
    Produtos com Certificação.
  </h5>
  <Link href={'https://www.portalsolar.com.br/noticias/tecnologia/equipamentos-fv/painel-solar-tier-1-entenda-a-classificacao-dos-fabricantes-de-modulos-fotovoltaicos'}
    className={Style.servicos__about__box1__qualifica__tier1__a}
    target='_blank'
    rel='noopener noreferrer'
    title='Oque é painel solar Tier 1'
  >
    <Image src={tier1} alt="Tier 1" className={Style.servicos__about__box1__qualifica__tier1__a__img} />
  </Link>
</div>

<div className={Style.servicos__about__box1__qualifica__tigo}>
  <h5 className={Style.servicos__about__box1__qualifica__tigo__texto}>
    Reconhecimento internacional.
  </h5>
  <Link href={'https://dol.com.br/dino/695449/tecnologia-da-tigo-energy-e-implantada-pela-mensch-engenharia-para-melhorar-a-producao-solar-no-brasil?d=1#'}
    className={Style.servicos__about__box1__qualifica__tigo__a}
    target='_blank'
    rel='noopener noreferrer'
    title='Reportagem Dol'
  >
    <Image src={tigo} alt="Tier 1" className={Style.servicos__about__box1__qualifica__tigo__a__img} />
  </Link>
</div>

<div className={Style.servicos__about__box1__qualifica__aldo}>
  <h5 className={Style.servicos__about__box1__qualifica__aldo__texto}>
    Top 100 parceiros da Aldo Solar 2021.
  </h5>
  <Link href={"https://www.aldo.com.br/blog/3o-dia-da-aldo-na-intersolar-2021/"}
    className={Style.servicos__about__box1__qualifica__aldo__a}
    target='_blank'
    rel='noopener noreferrer'
    title='aldo.blog'
  >
    <Image src={aldo} alt="Tier 1" className={Style.servicos__about__box1__qualifica__aldo__a__img} />
  </Link>
</div>

<div className={Style.servicos__about__box1__qualifica__growatt}>
  <h5 className={Style.servicos__about__box1__qualifica__growatt__texto}>
    Top 10 Empresas do Brasil pela Growatt 2022.
  </h5>
  <Link href={"https://www.instagram.com/p/CiLYsMGLegx/?img_index=4"}
    className={Style.servicos__about__box1__qualifica__growatt__a}
    target='_blank'
    rel='noopener noreferrer'
    title='Postagem no instagram da Growatt foto 4'
  >
    <Image src={growatt} alt="Tier 1" className={Style.servicos__about__box1__qualifica__growatt__a__img} />
  </Link>
</div>

</div> */}