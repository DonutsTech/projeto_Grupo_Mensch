export interface FormContatoMascher {
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
