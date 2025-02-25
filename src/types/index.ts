export interface FormContatoMensch {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export interface FormSimulacaoSolar {
  nome: string;
  telefone: string;
  cep: string;
  valor: string;
}

export interface Endereco {
  bairro: string;
  cep: string;
  estado: string;
  rua: string;
  uf: string;
}

export interface Mensagem {
  to: string;
  subject: string;
  text: string;
}

export interface Tabela {
  kwh: number;
  qtd: number;
  preco: number;
  min: number;
  max: number;
}

export interface Data {
  to: string;
  subject: string;
  text: string;
  tel: string;
}

export interface Error {
  mensagem: string
}
