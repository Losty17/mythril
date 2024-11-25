"use client";

import Image from "next/image";
import TextField from "@/lib/components/common/TextField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { FormEvent, useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    login();
  };

  return (
    <div className="flex flex-col gap-12">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2 py-10 px-20 rounded-lg shadow-xl bg-base-100"
      >
        <Image
          src="/logo_full.svg"
          alt="Logo"
          className="px-12 py-4 w-full text-black"
          width={0}
          height={0}
        />
        <TextField
          label="Mail"
          placeholder="mail@example.com"
          startIcon={<EnvelopeIcon className="size-5" />}
        />
        <TextField
          label="Password"
          placeholder="••••••••"
          startIcon={<LockClosedIcon className="size-5" />}
        />
        <button className="btn btn-primary my-4" type="submit">
          Login
        </button>
      </form>
      <p className="text-center">
        Don&apos;t have an account?{" "}
        <a className="text-primary" href="/auth/register">
          Register here
        </a>
      </p>
    </div>
  );
};

export default Login;
