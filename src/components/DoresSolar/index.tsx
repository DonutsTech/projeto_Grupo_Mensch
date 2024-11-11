
import Image from 'next/image';
import Style from './DoresSolar.module.scss';

import bg from './assets/doresSolar2.png';
import classNames from 'classnames';

const DoresSolar = () => {

  return (
    <section className={Style.section} aria-label='Por que você ainda usa energia convencional ?'>
      <div className={Style.section__content}>
        <h2 className={Style.section__content__titulo}>Até quando você vai ficar pagando essa <br /><span>taxa</span> de <span>energia</span>? </h2>
        <div className={Style.section__content__textos}>
          <p className={classNames({
            [Style.section__content__textos__paragrafo]: true,
            [Style.section__content__textos__paragrafo__1]: true,
          })}> Você está cansado de ver sua conta de energia elétrica sugar seu orçamento? Cada mês, mais dinheiro vai para pagar a conta, em vez de investir em coisas que realmente importam para sua família, negócio ou fazenda?
          </p>
          <p className={classNames({
            [Style.section__content__textos__paragrafo]: true,
            [Style.section__content__textos__paragrafo__2]: true,
          })}>
            Imagine se você pudesse direcionar esse dinheiro para:
          </p>
          <ul className={Style.section__content__textos__lista}>
            <li> ◆ Educação dos filhos</li>
            <li> ◆ Expansão do seu negócio</li>
            <li> ◆ Melhorias na fazenda</li>
            <li> ◆ Momentos de lazer em família</li>
          </ul>
          <p className={classNames({
            [Style.section__content__textos__paragrafo]: true,
            [Style.section__content__textos__paragrafo__3]: true,
          })}>
            Em vez de pagar contas de energia altas, você pode estar investindo em um futuro melhor.
          </p>
        </div>
      </div>
      <Image src={bg} alt='doresSolar' className={Style.section__bg} />
    </section>
  )
};

export default DoresSolar;

