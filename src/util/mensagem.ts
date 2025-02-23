import { Endereco, FormContatoMensch, FormSimulacaoSolar } from "@/types";

export function mensagemGrupoMensch(formDados: FormContatoMensch, nome: string) {
  return `
    Prezado(a) Administrador(a),

    Você recebeu uma nova mensagem através do formulário de contato do ${nome}. Abaixo estão os detalhes enviados pelo remetente:

      Nome: ${formDados.nome}
      Email: ${formDados.email === undefined || formDados.email.trim() === '' ? '----- Contato Não informou ----- ' : formDados.email }
      Telefone: ${formDados.telefone}
      Mensagem:  ${formDados.mensagem === undefined || formDados.mensagem.trim() === '' ? '----- Contato Não informou ----- ' : formDados.email }

    Por favor, entre em contato com o remetente para mais informações, caso necessário.
  `
}

export function mensagemMenschSolarCalcular(endereco: Endereco ,formDados: FormSimulacaoSolar) {
  return `
    Prezado(a) Administrador(a),

    Você recebeu uma nova mensagem através do formulário de Simulação da Mensch Solar. Abaixo estão os detalhes enviados pelo remetente:

      Nome: ${formDados.nome}
      Telefone: ${formDados.telefone}

      Endereço de Cliente:
        Rua: ${endereco.rua}
        Bairro: ${endereco.bairro}
        Cidade: ${endereco.estado} / ${endereco.uf}
        CEP: ${endereco.cep}

      O valor da conta: ${formDados.valor}

    Por favor, entre em contato com o remetente para mais informações, caso necessário.
  `
}
