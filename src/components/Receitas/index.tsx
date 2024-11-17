import tipos from '@/util/tipos.json';
import Image from 'next/image';

interface Tipo {
  id: number;
  nome: string;
  imagem: string;
}

const Receitas = () => {
  return (
    <div>
      {
        tipos.map(({id, imagem, nome}: Tipo) => (
          <button type='button' key={id}>
            <Image src={imagem} alt={nome} width={80} height={80}/>
            <h3>{nome}</h3>
          </button>
        ))
      }
    </div>
  )
}

export default Receitas;
