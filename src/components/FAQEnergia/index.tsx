'use client';

import { useState } from 'react';
import Acordeon from '../Acordeon';
import Style from './FAQEnergia.module.scss';

const FAQEnergia = () => {

  const [aberto, setAberto] = useState(0);

  const handleTogle = (id: number) => {
    setAberto(aberto === id ? 0 : id);
  };

  const faqList = [
    {
      id: 1,
      pergunta: 'Compensa investir em energia solar?',
      resposta: 'A energia solar é uma opção financeiramente vantajosa para residências e empresas, proporcionando economia de energia de até 92%, retorno sobre o investimento em até 3 anos, aumento do valor da propriedade e benefícios fiscais. Além disso, contribui para a redução da emissão de gases de efeito estufa, promovendo uma energia limpa e sustentável.'
    },
    {
      id: 2,
      pergunta: "Como é feita a instalação de painéis solares?",
      resposta: "A instalação de um sistema solar começa com uma análise detalhada do consumo de energia do local, para determinar a capacidade necessária. Em seguida, desenvolvemos um projeto personalizado, considerando as características específicas do local e as necessidades energéticas do cliente. Após a aprovação do projeto, obtenemos as autorizações necessárias e aprovações de rede elétrica. Em seguida, iniciamos a instalação, incluindo instalação de painéis solares, conexões elétricas, testes e inspeções, e vistoria da concessionária para ligação do sistema. É importante notar que o processo de instalação pode variar dependendo das regulamentações locais, do tipo de sistema escolhido e das características específicas do local. Na Mensch Energia Solar, garantimos que todos os passos sejam realizados com eficiência e segurança, para garantir um sistema solar funcionando perfeitamente."
    },
    {
      id: 3,
      pergunta: "Qual a durabilidade do sistema solar da Mensh?",
      resposta: "Nossos painéis solares têm uma vida útil projetada de 25 anos ou mais, garantindo uma geração de energia confiável e eficiente por décadas."
    }
  ]

  return (
    <div className={Style.faq}>
      {faqList.map((faq) => {
        return (
        <Acordeon 
          key={faq.id} 
          pergunta={faq.pergunta} 
          resposta={faq.resposta} 
          aberto={aberto === faq.id} 
          onTogle={() => handleTogle(faq.id)}
        />
      );})}
    </div>
  )
};


export default FAQEnergia;
