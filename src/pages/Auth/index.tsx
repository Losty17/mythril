import { FormEvent, useRef, useState } from "react";
import {
  Divider,
  FormContainer,
  FloatingLabelInput as Input,
  Waves,
} from "../../components";
import { useAPI, useForm } from "../../hooks";
import { classNames } from "../../utils";
import * as yup from "yup";
import { ValidationError } from "yup";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Button } from "../../components/buttons";

interface LoginFormData {}
interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const api = useAPI();
  const getFormData = useForm();
  const signInFormRef = useRef<FormHandles>(null);
  const signUpFormRef = useRef<FormHandles>(null);

  const handleChangeForm = (login: boolean) => {
    setIsLogin(login);
    signInFormRef.current?.setErrors({});
    signUpFormRef.current?.setErrors({});
    signInFormRef.current?.reset();
    signUpFormRef.current?.reset();
  };

  const handleLogin = async (data: LoginFormData) => {
    try {
      signInFormRef.current?.setErrors({});

      const schema = yup.object().shape({
        login: yup.string().required("Usuário inválido!"),
        password: yup.string().required("Senha inváida!"),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      if (err instanceof ValidationError) {
        err.inner.forEach((innerError) => {
          signInFormRef.current?.setFieldError(
            innerError.path || "",
            innerError.message
          );
        });
      }
    }
  };

  const handleRegister = async (data: RegisterFormData) => {
    try {
      signUpFormRef.current?.setErrors({});

      const schema = yup.object().shape({
        username: yup.string().required("aaaa inválido!"),
        email: yup.string().required("asdasd inváida!"),
        password: yup.string().required("teste inváida!"),
        confirm: yup
          .string()
          .oneOf([yup.ref("password")], "Teste")
          .required("adads"),
      });

      await schema.validate(data, { abortEarly: false });

      const { password, username, email, confirm } = data;

      if (password === confirm)
        console.log(
          await api.post("/api/auth", {
            type: "register",
            username,
            email,
            password,
          })
        );
    } catch (err) {
      if (err instanceof ValidationError) {
        err.inner.forEach((innerError) => {
          signUpFormRef.current?.setFieldError(
            innerError.path || "",
            innerError.message
          );
        });
      }
    }
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
          <FormContainer className="font-medium">
            <Form ref={signInFormRef} onSubmit={handleLogin}>
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
              <Button type="submit" label="Sign In" className="w-full" />
            </Form>
          </FormContainer>
        ) : (
          <FormContainer className="font-medium">
            <Form ref={signUpFormRef} onSubmit={handleRegister}>
              <Input label="Username" name="username" />
              <Input label="E-mail" type="email" name="email" />
              <Input
                label="Password"
                errorLabel="dadasdasd"
                type="password"
                name="password"
              />
              <Input label="Confirm password" type="password" name="confirm" />
              <Button type="submit" label="Sign Up" className="w-full" />
            </Form>
          </FormContainer>
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
