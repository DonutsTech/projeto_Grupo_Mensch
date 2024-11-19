
import Dicas from '../Dicas';
import Style from './Saudavel.module.scss';

const Saudavel = () => { 

  return (
    <section className={Style.saudavel} id='dicas' aria-label='Dicas para a Saúde'>
      <h2 className={Style.saudavel__titulo}>Lorem ipsum <span>dolor</span>.</h2>
      <p className={Style.saudavel__texto}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam similique inventore, earum hic qui voluptate sint, quas harum necessitatibus animi consequatur natus sapiente blanditiis ipsam sequi consectetur eius tempora.
      </p>

      <div className={Style.saudavel__slider}>
        <Dicas />
      </div>

    </section>
  )
};

export default Saudavel;
