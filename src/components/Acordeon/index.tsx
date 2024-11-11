"use client";
import { useEffect, useRef, useState } from 'react';
import Style from './Acordeon.module.scss';
import classNames from 'classnames';


interface IProps {
  pergunta: string;
  resposta: string;
  aberto: boolean;
  onTogle: () => void;
}

const Acordeon = ({ pergunta, resposta, aberto, onTogle }: IProps) => {

  const [altura, setAltura] = useState(0);
  const respostaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aberto && respostaRef.current !== null) { 
      const alturaResposta = respostaRef.current.scrollHeight + 300;
      setAltura(alturaResposta);
    }
  }, [aberto])

  return (
    <div className={Style.acordeon}>

      <div className={classNames({
        [Style.acordeon__btn]: true,
        [Style.acordeon__btn__aberto]: aberto,
      })}
      onClick={onTogle}
      >
        <div className={Style.acordeon__btn__box}>
          <p className={classNames({
            [Style.acordeon__btn__box__pergunta]: true,
            [Style.acordeon__btn__box__pergunta__aberto]: aberto,
          })}>{pergunta}</p>
          <p className={Style.acordeon__btn__box__icon} >{aberto ? '-' : '+'}</p>
        </div>
        {aberto && (
          <div className={classNames({
            [Style.acordeon__btn__resposta]: true,
            [Style.acordeon__btn__resposta__aberto]: aberto,
          })}
            style={{maxHeight: altura}}
            ref={respostaRef}
          >
            <p className={Style.acordeon__btn__resposta__texto}>{resposta}</p>
          </div>
        )}
      </div>
    </div>
  )
};

export default Acordeon;
