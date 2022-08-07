import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { ValidationError } from "yup";
import {
  Divider,
  FloatingLabelInput as Input,
  FormContainer,
  Waves,
} from "../../components";
import { Button } from "../../components/buttons";
import { setUser } from "../../features";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { LoginData, RegisterData, User } from "../../types";
import { classNames, navigate } from "../../utils";
import AuthProps from "./props";

const Auth: React.FC<AuthProps> = () => {
  const [isLogin, setIsLogin] = useState(true);
  const signInFormRef = useRef<FormHandles>(null);
  const signUpFormRef = useRef<FormHandles>(null);
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleChangeForm = (login: boolean) => {
    setIsLogin(login);
    signInFormRef.current?.setErrors({});
    signUpFormRef.current?.setErrors({});
    signInFormRef.current?.reset();
    signUpFormRef.current?.reset();
  };

  const handleLogin = async (data: LoginData) => {
    try {
      signInFormRef.current?.setErrors({});

      const schema = yup.object().shape({
        login: yup.string().required("Usuário inválido!"),
        password: yup.string().required("Senha inváida!"),
      });

      await schema.validate(data, { abortEarly: false });

      fetch("/api/auth", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type: "login" }),
      }).then((res) => {
        if (res.status === 200)
          res.json().then((data) => {
            const { email, name, avatar, token, tokenExpiration } = data;
            const user: User = { email, name, avatar, token, tokenExpiration };

            if (user) {
              dispatch(setUser(user));
              localStorage.setItem("user", JSON.stringify(user));
            }
          });
        else {
          console.log(res.statusText);
        }
      });

      // throw Error("Unexpected error, could not sign in");
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

  const handleRegister = async (data: RegisterData) => {
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

      // const { password, username, email, confirm } = data;

      // if (password === confirm)
      //   console
      //     .log
      //     // await api.post("/api/auth", {
      //     //   type: "register",
      //     //   username,
      //     //   email,
      //     //   password,
      //     // })
      //     ();
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
      {!user && (
        <>
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
                    type="password"
                    name="password"
                  ></Input>
                  <Button type="submit" label="Sign In" className="w-full">
                    <div className="flex flex-1 justify-between text-mythril-500/60 mt-2">
                      <a href="reset-password">Forgot your password?</a>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleChangeForm(false)}
                      >
                        Sign up, it's free!
                      </span>
                    </div>
                  </Button>
                </Form>
              </FormContainer>
            ) : (
              <FormContainer className="font-medium">
                <Form ref={signUpFormRef} onSubmit={handleRegister}>
                  <Input label="Username" name="username" />
                  <Input label="E-mail" type="email" name="email" />
                  <Input label="Password" type="password" name="password" />
                  <Input
                    label="Confirm password"
                    type="password"
                    name="confirm"
                  />
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
        </>
      )}
    </div>
  );
};

export default Auth;
