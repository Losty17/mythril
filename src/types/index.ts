import { Layout } from "../components/GridDashboard/interfaces";
import { LoginData, RegisterData } from "./auth";

interface User {
  name: string;
  email: string;
  avatar: string;
  token: string;
  tokenExpiration: string;
}

type Breakpoint = "lg" | "md" | "sm" | "xs" | "xxs";
type LocalStorageKey = "layouts";

interface GridLocalStorage {
  layouts?: {
    lg?: Layout[];
    md?: Layout[];
    sm?: Layout[];
    xs?: Layout[];
    xxs?: Layout[];
  };
}

export type {
  LoginData,
  RegisterData,
  User,
  Breakpoint,
  LocalStorageKey,
  GridLocalStorage,
};
