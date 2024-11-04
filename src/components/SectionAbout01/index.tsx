
import classNames from 'classnames';
import Style from './SectionAbout01.module.scss';

import foto from './assets/imagem__about01.png';
import Image from 'next/image';

const SectionAbout01 = () => {

  return (
    <section className={Style.section} aria-label='Oque é ser Mensch'>
      <div className={Style.section__content}>
        <div className={Style.section__content__left}>
          <h2 className={Style.section__content__left__titulo}>
            O Que significa <br /><span>Ser Mensh</span>?
          </h2>
          <Image src={foto} alt='Foto de Mensh' className={Style.section__content__left__foto} />
        </div>
        <div className={Style.section__content__texto}>
          <p className={classNames({
            [Style.section__content__texto__paragrafo]: true,
            [Style.section__content__texto__paragrafo_1]: true,
          })}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
          <p className={classNames({
            [Style.section__content__texto__paragrafo]: true,
            [Style.section__content__texto__paragrafo_2]: true,
          })}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
          <p className={classNames({
            [Style.section__content__texto__paragrafo]: true,
            [Style.section__content__texto__paragrafo_3]: true,
          })}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
        </div>

      </div>
    </section>
  )
};

export default SectionAbout01;
