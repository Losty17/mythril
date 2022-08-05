import { FormEvent, useState } from "react";
import {
  Divider,
  Form,
  FloatingLabelInput as Input,
  Waves,
} from "../../components";
import { useAPI, useForm } from "../../hooks";
import { classNames } from "../../utils";
import * as yup from "yup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const api = useAPI();
  const getFormData = useForm();

  const handleChangeForm = (login: boolean) => {
    setIsLogin(login);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const { data, fields } = getFormData(e.currentTarget as HTMLFormElement);

    const schema = yup.object().shape({
      login: yup.string().required("Usuário inválido!"),
      password: yup.string().required("Senha inváida!"),
    });

    await schema
      .validate(data)
      .catch((err: yup.ValidationError) => {
        const input = fields[err.path || ""];
        input.setAttribute("isError", "true");
      })
      .then(
        async () => {
          console.log(await api.post("/api/auth", { type: "login", ...data }));
        },
        async () => {}
      );
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const { data, fields } = getFormData(e.currentTarget as HTMLFormElement);
    const { username, email, password, confirm } = data;

    if (password === confirm)
      console.log(
        await api.post("/api/auth", {
          type: "register",
          username,
          email,
          password,
        })
      );
  };

  return (
    <div className="h-screen flex">
      <Waves
        height={55}
        amplitude={30}
        speed={0.34}
        paused
        style={{
          transform: "rotate(180deg) scaleX(-1)",
        }}
      />
      <div className="m-auto h-3/5 w-1/4">
        {/* <img src="/diamond.svg" alt="" className="m-auto mb-2.5" /> */}
        <div className="flex font-display text-4xl text-center justify-center select-none mb-6">
          <span
            className={classNames(
              "text-mythril-700",
              !isLogin ? "opacity-40 cursor-pointer" : ""
            )}
            onClick={() => handleChangeForm(true)}
          >
            SIGN IN
          </span>
          <Divider vertical />
          <span
            className={classNames(
              "text-mythril-700",
              isLogin ? "opacity-40 cursor-pointer" : ""
            )}
            onClick={() => handleChangeForm(false)}
          >
            SIGN UP
          </span>
        </div>
        {isLogin ? (
          <Form
            submitLabel="Sign In"
            className="font-medium"
            onSubmit={handleLogin}
          >
            <Input label="E-mail or Username" name="login" />
            <Input
              label="Password"
              errorLabel="dadasdasd"
              type="password"
              name="password"
            >
              <div className="flex flex-1 justify-between text-mythril-500/60">
                <a href="reset-password">Forgot your password?</a>
                <span
                  className="cursor-pointer"
                  onClick={() => handleChangeForm(false)}
                >
                  Sign up, it's free!
                </span>
              </div>
            </Input>
          </Form>
        ) : (
          <Form
            submitLabel="Sign Up"
            className="font-semibold"
            onSubmit={handleRegister}
          >
            <Input label="Username" name="username" />
            <Input label="E-mail" type="email" name="email" />
            <Input
              label="Password"
              errorLabel="dadasdasd"
              type="password"
              name="password"
            />
            <Input label="Confirm password" type="password" name="confirm" />
          </Form>
        )}
      </div>
      <Waves
        height={55}
        amplitude={30}
        speed={3.5}
        paused
        style={{ position: "absolute", bottom: 0 }}
      />
    </div>
  );
};

export default Auth;
