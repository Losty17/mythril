import { VercelRequest, VercelResponse } from "@vercel/node";
import { getRandomChar } from "./_utils";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { id } = request.query;

  response.status(200).json(getRandomChar());
}
