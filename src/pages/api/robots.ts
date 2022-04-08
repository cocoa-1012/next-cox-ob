import { NextApiRequest, NextApiResponse } from "next/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robots = `User-agent: *
${process.env.NEXT_PUBLIC_ROBOTS_TXT}
Sitemap: ${process.env.NEXT_PUBLIC_SITEMAP}`;

  return res.send(robots);
}
