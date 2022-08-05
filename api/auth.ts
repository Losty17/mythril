import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const data = request.body;
  if (data.type === "login") {
    const { login } = data;

    response.status(200).json({
      login,
    });
  } else if (data.type === "register") {
    response.status(200).json({
      ...data,
      password: "",
    });
  }
}
