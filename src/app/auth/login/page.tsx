import Image from "next/image";
import TextField from "@/lib/components/TextField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Login = () => {
  return (
    <>
      <form className="flex flex-col gap-2">
        <Image
          src="/logo_full.svg"
          alt="Logo"
          className="text-black"
          width={100}
          height={100}
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
        <button className="btn btn-primary mt-4" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
