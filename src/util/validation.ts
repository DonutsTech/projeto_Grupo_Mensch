import { FormContatoMensch, FormSimulacaoSolar, Tabela } from "@/types";

export const validateEmail = (email: string) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
};

export const validatePhone = (phone: string) => {
  const regex = /^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4,5}$/;
  return regex.test(phone);
};

export const isUpperCase = (str: string) => {
  return str === str.toUpperCase();
}

export function validation(value: FormContatoMensch) {
  if (value.nome.trim() === '' || value.telefone.trim() === '' || value.nome === undefined || value.telefone === undefined ) {
    return 'O nome e o telefone são obrigatórios'
  }

  if (!(value.email === '') && !(validateEmail(value.email))) {
    return 'E-mail inválido, digite novamente.'
  }

  if (!(validatePhone(value.telefone))) {
    return 'Telefone inválido, digite novamente.'
  }

  return ''
}

export function validationModal(value: FormSimulacaoSolar) {
  if (value.nome.trim() === '' || value.cep.trim() === '' || value.telefone.trim() === '' ||
    value.valor.trim() === '' || value.nome === undefined || value.telefone === undefined ||
    value.cep === undefined || value.valor === undefined) {
    return 'Todos os campos são obrigatórios.'
  }

  if (!(validatePhone(value.telefone))) {
    return 'Telefone inválido, digite novamente.'
  }

  return ''
}

export function chamarNumero(lista: Tabela[], solicitado: number) : Tabela | null {
  return lista.find(numero => numero.kwh >= solicitado) || null;
}
