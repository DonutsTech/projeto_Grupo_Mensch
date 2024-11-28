
import Dicas from '../Dicas';
import Style from './Saudavel.module.scss';

const Saudavel = () => {

  return (
    <section className={Style.saudavel} id='dicas' aria-label='Dicas para a Saúde'>
      <h2 className={Style.saudavel__titulo}>Dicas Práticas para <span>Transformar</span> Sua Rotina e <br />Conquistar a sua <span>Vida Saudável</span>.</h2>
      <p className={Style.saudavel__texto}>
        Descubra como pequenas mudanças podem trazer grandes resultados para sua saúde! Aprenda hábitos simples e eficazes para melhorar sua qualidade de vida, cuidar do corpo e viver com mais equilíbrio, começando hoje mesmo sua transformação.
      </p>

      <div className={Style.saudavel__slider}>
        <Dicas />
      </div>

    </section>
  )
};

export default Saudavel;
