'use client';

import classNames from 'classnames';
import Style from './Contatos.module.scss';

const Contatos = () => {

  return (
    <section className={Style.contatos} id='contatos__mensch' aria-label='Contatos do Grupo Mensch'>
      <h2 className={Style.contatos__title}>
        Fale Conosco
      </h2>

      <div className={Style.contatos__content}>

        <form className={Style.contatos__content__form} >
          <label htmlFor='nome' aria-label='Digite o seu nome' />
          <input 
            type='text' 
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__nome]: true,
            })} 
            id='nome' 
            placeholder='Nome' 
          />
          <label htmlFor='email' aria-label='Digite o seu email' />
          <input 
            type='email' 
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__email]: true,
            })} 
            id='email' 
            placeholder='Digite o seu melhor e-mail' 
          />
          <label htmlFor='telefone' aria-label='Digite o seu telefone' />
          <input 
            type='text'
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__telefone]: true,
            })} 
            id='telefone' 
            placeholder='Telefone'
          />
          <label htmlFor='mensagem' aria-label='Digite sua mensagem' />
          <textarea
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__mensagem]: true,
            })} 
            id='mensagem' 
            placeholder='Digite sua mensagem'
          />
          <button className={Style.contatos__content__form__btn} type='submit'>Enviar</button>
          </form>

          <div className={Style.contatos__content__redes}>
            <p>Redes Sociais</p>
          </div>
      </div>
    </section>
  )
};

export default Contatos;
