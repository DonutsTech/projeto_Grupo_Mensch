import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  mensagem?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {

  } else {
    res.status(500).json({ mensagem: 'rota errada' })
  }
}
