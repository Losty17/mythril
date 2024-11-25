import { useEffect, useState } from "react";
import { AuthContextType, User } from "./types";
import { redirect, usePathname } from "next/navigation";
// import useFetch from "@/lib/hooks/useFetch";

const exampleUser = {
  firstName: "John",
  lastName: "Doe",
  profilePicture: "/avatar.jpg",
  theme: "light" as const,
};

const useAuthProvider = (): AuthContextType => {
  const pathname = usePathname();
  const canRedirect =
    pathname !== "/auth/login" && pathname !== "/auth/register";

  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | null>(null);

  // const fetch = useFetch();

  const forwardUser = () => redirect("/auth/login");

  const login = () => {
    setUser(exampleUser);

    setToken("1");
    localStorage.setItem("jwt", "1");

    redirect("/");
  };
  const logout = () => {};

  const validateToken = async () => {
    // const response = await fetch("/users/me");

    // if (!response.success) {
    //   if (canRedirect) forwardUser();
    //   return;
    // }

    // const user = response.data;
    // setUser({
    //   firstName: user.first_name,
    //   lastName: user.last_name,
    //   profilePicture: user.profile_picture,
    //   theme: user.theme,
    // });

    setUser(exampleUser);
    if (pathname !== "/") redirect("/");
  };

  useEffect(
    () => {
      if (!!user) redirect("/");

      const jwt = "1"; // localStorage.getItem("jwt");

      if (!jwt) {
        if (canRedirect) forwardUser();
        return;
      }

      setToken(jwt);
      validateToken();
    },
    // this effect should only run once on page mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!user,
  };
};

export default useAuthProvider;
