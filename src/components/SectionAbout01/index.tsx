
import classNames from 'classnames';
import Style from './SectionAbout01.module.scss';

import foto from './assets/jessica_mensch.png';
import Image from 'next/image';

const SectionAbout01 = () => {

  return (
    <section className={Style.section} aria-label='Oque é ser Mensch'>
      <div className={Style.section__content}>
        <div className={Style.section__content__left}>
          <h2 className={Style.section__content__left__titulo}>
            O Que significa <br /><span>Ser Mensch</span>?
          </h2>
          <Image src={foto} alt='Foto de Mensh' className={Style.section__content__left__foto} />
        </div>
        <div className={Style.section__content__texto}>
          <p className={classNames({
            [Style.section__content__texto__paragrafo]: true,
            [Style.section__content__texto__paragrafo_1]: true,
          })}>
              Ser Mensch é agir com integridade, empatia e compromisso,
            buscando sempre honrar a Deus através de cada gesto e ação no trabalho.
            Representa uma vida guiada por valores que vão além do lucro e das metas.
          </p>
          <p className={classNames({
            [Style.section__content__texto__paragrafo]: true,
            [Style.section__content__texto__paragrafo_2]: true,
          })}>
              É um chamado para fazer o bem, ser exemplo de honestidade e construir
            relações de confiança. Aquele que é Mensch reconhece o valor único de cada pessoa
            ao seu redor, trabalha com propósito e humildade, e usa seus talentos para servir aos outros.
          </p>
          <p className={classNames({
            [Style.section__content__texto__paragrafo]: true,
            [Style.section__content__texto__paragrafo_3]: true,
          })}>
              Construindo um legado de impacto positivo. É uma jornada de transformação
            que reflete o amor ao próximo e o desejo de deixar um mundo melhor,
            fazendo com que cada ação seja uma forma de honrar a Deus e contribuir para o bem coletivo.
          </p>
        </div>

      </div>
    </section>
  )
};

export default SectionAbout01;
