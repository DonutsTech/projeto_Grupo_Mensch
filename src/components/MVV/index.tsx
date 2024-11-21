
import Style from './MVV.module.scss';

import pin from './assets/pin.svg';
import Image from 'next/image';

const MVV = () => {

  return (
    <section className={Style.mvv} aria-label='Missão Visão e Valores do Grupo Mensch'>

      <div className={Style.mvv__textos}>
        <h2 className={Style.mvv__textos__titulo}>
          <span>Servir</span> e <span>Transformar</span>.
        </h2>
        <p className={Style.mvv__textos__paragrafo}>
        Em nossa jornada, transformamos vidas com serviços e produtos sustentáveis. Servimos com amor e ética, priorizando segurança e excelência. Unidos, inspiramos responsabilidade social e consciência ambiental, para um futuro próspero e digno para todos.
        </p>
      </div>

      <div className={Style.mvv__content}>
        <div className={Style.mvv__content__mv}>
          <div className={Style.mvv__content__mv__missao}>
            <h3 className={Style.mvv__content__mv__missao__titulo}>
              Nossa <span>Missão</span>: </h3>
            <p className={Style.mvv__content__mv__missao__paragrafo}>
              Honrar a Deus através do nosso trabalho.
            </p>
          </div>
          <div className={Style.mvv__content__mv__visao}>
            <h3 className={Style.mvv__content__mv__visao__titulo}>
              Nossa <span>Visão</span>: </h3>
            <p className={Style.mvv__content__mv__visao__paragrafo}>
              Ser a inspiração para um mundo melhor.
            </p>
          </div>
        </div>
        <div className={Style.mvv__content__valores}>
          <h3 className={Style.mvv__content__valores__titulo}>
            Nossos <span>Valores</span>: </h3>
          <dl className={Style.mvv__content__valores__dl}>

            <div>
              <dt className={Style.mvv__content__valores__dl__dt}>
                <Image src={pin} alt='pin' /> Amor:
              </dt>
              <dd className={Style.mvv__content__valores__dl__dd}>
                Transformar as pessoas para criar um impacto duradouro nas gerações futuras.
              </dd>
            </div>

            <div>
              <dt className={Style.mvv__content__valores__dl__dt}>
                <Image src={pin} alt='pin' /> Ética:
              </dt>
              <dd className={Style.mvv__content__valores__dl__dd}>
                O sucesso verdadeiro só é alcançado seguindo o caminho da integridade.
              </dd>
            </div>

            <div>
              <dt className={Style.mvv__content__valores__dl__dt}>
                <Image src={pin} alt='pin' /> Segurança:
              </dt>
              <dd className={Style.mvv__content__valores__dl__dd}>
                Valorizamos a preservação da vida e reconhecemos que somos nosso maior patrimônio.
              </dd>
            </div>

            <div>
              <dt className={Style.mvv__content__valores__dl__dt}>
                <Image src={pin} alt='pin' /> Excelência:
              </dt>
              <dd className={Style.mvv__content__valores__dl__dd}>
                Buscamos a melhoria constante em nossos padrões de qualidade organizacional.
              </dd>
            </div>

            <div>
              <dt className={Style.mvv__content__valores__dl__dt}>
                <Image src={pin} alt='pin' /> União:
              </dt>
              <dd className={Style.mvv__content__valores__dl__dd}>
              Alcançamos objetivos comuns através do apoio mútuo e solidariedade.
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </section>
  )
};

export default MVV;
