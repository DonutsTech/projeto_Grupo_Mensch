import { FormContatoMascher } from "@/types";

export const validateEmail = (email: string) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
};

export const validatePhone = (phone: string) => {
  const regex = /^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4,5}$/;
  return regex.test(phone);
};

export function validation(value: FormContatoMascher) {
  if (value.nome === '' || value.telefone === '' || value.nome === undefined || value.telefone === undefined ) {
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