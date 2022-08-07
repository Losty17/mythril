export interface LoginData {
  type: "login";
  login: string;
  password: string;
}
export interface RegisterData {
  type: "register";
  username: string;
  email: string;
  password: string;
  confirm: string;
}
