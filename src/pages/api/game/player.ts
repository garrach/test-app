// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const play={
        id:"0",
        inventory:"inventory"
        }
  res.status(200).json(play);
}
