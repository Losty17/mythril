"use client";

import { createContext, PropsWithChildren } from "react";
import { AuthContextType } from "./types";
import useAuth from "./useAuth";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
const AuthProvider = ({ children }: PropsWithChildren) => {
  const authContext = useAuth();

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
