import { useEffect, useState } from "react";
import { AuthContextType, User } from "./types";
import { redirect, usePathname } from "next/navigation";
import useFetch from "@/lib/hooks/useFetch";

const useAuthProvider = (): AuthContextType => {
  const pathname = usePathname();
  const canRedirect =
    pathname !== "/auth/login" && pathname !== "/auth/register";

  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | null>(null);

  const fetch = useFetch();

  const forwardUser = () => redirect("/auth/login");
  const login = () => {};
  const logout = () => {};

  const validateToken = async () => {
    const response = await fetch("/users/me");

    if (!response.success) {
      if (canRedirect) forwardUser();
      return;
    }

    const user = response.data;
    setUser({
      firstName: user.first_name,
      lastName: user.last_name,
      profilePicture: user.profile_picture,
      theme: user.theme,
    });
  };

  useEffect(
    () => {
      const jwt = localStorage.getItem("jwt");

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
