import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const response = await fetch(`https://viacep.com.br/ws/${data.cep}/json/`)

    const resultado = await response.json()

    if (resultado.erro) {
      return NextResponse.json({ mensagem: 'cep inválido' }, { status: 500 });
    }

    return  NextResponse.json({
      rua: resultado.logradouro,
      bairro: resultado.bairro,
      estado: resultado.estado,
      uf: resultado.uf,
      cep: resultado.cep
    }, { status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ mensagem: 'cep inválido' }, { status: 500 });
  }
}
