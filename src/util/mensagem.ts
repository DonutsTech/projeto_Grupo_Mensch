import { FormContatoMascher } from "@/types";

export function mensagemGrupoMensch(formDados: FormContatoMascher) {
  return `
    Prezado(a) Administrador(a),

    Você recebeu uma nova mensagem através do formulário de contato do Grupo Mensch. Abaixo estão os detalhes enviados pelo remetente:

      Nome: ${formDados.nome}
      Email: ${formDados.email === undefined || formDados.email.trim() === '' ? '----- Contato Não informou ----- ' : formDados.email }
      Telefone: ${formDados.telefone}
      Mensagem:  ${formDados.mensagem === undefined || formDados.mensagem.trim() === '' ? '----- Contato Não informou ----- ' : formDados.email }

    Por favor, entre em contato com o remetente para mais informações, caso necessário.
  `
}
