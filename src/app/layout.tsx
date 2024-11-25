import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import AuthProvider from "../providers/AuthProvider";

export const metadata: Metadata = {
  title: "Jobly",
  description: "Sua plataforma para divulgar seu trabalho!",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" data-theme="light">
    <body className="antialiased bg-base-300">
      <AuthProvider>{children}</AuthProvider>
    </body>
  </html>
);

export default RootLayout;
