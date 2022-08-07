import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const data = request.body;
  if (!data.type) return response.status(400).send("Missing auth type");

  if (data.type === "login") {
    const { login, password } = data;

    if (login === "admin" && password === "admin") {
      response.status(200).json({
        token: "yee yee ass bitch",
        email: "vinicius@kappke.tech",
        name: "yts0l",
        avatar:
          "https://images-ext-2.discordapp.net/external/jOI8l5tSIv8_F-Re0EXWQB8eDBhcmzLBZQKWJ8-olgU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/207947146371006464/a_4c9c0b986675ca7adf01b4876ccd4425.gif?width=436&height=436",
        tokenExpiration: "3000",
      });
    } else {
      response.status(401).json({ error: "Unauthorized" });
    }
  } else if (data.type === "register") {
    response.status(200).json({
      ...data,
      password: "",
    });
  } else if (data.type === "validate") {
    const { token } = data;

    if (token === "yee yee ass bitch")
      response.status(200).send("Token is valid");
    else response.status(401).send("Token is invalid");
  }
}
