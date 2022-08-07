interface LoginData {
  type: "login";
  login: string;
  password: string;
}
interface RegisterData {
  type: "register";
  username: string;
  email: string;
  password: string;
  confirm: string;
}
interface User {
  name: string;
  email: string;
  avatar: string;
  token: string;
  tokenExpiration: string;
}

export type { User, RegisterData, LoginData };
