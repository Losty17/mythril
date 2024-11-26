import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import AuthProvider from "../providers/AuthProvider";

export const metadata: Metadata = {
  title: "Mythril",
  description: "Your all-in-one D&D manager!",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" data-theme="mythril">
    <body className="antialiased bg-base-300">
      <AuthProvider>{children}</AuthProvider>
    </body>
  </html>
);

export default RootLayout;
