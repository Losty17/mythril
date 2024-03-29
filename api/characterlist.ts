import { VercelRequest, VercelResponse } from "@vercel/node";
import { getRandomCharList } from "./_utils";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  response.status(200).json({ data: getRandomCharList(40) });
}
