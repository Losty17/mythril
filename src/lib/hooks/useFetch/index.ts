import { useContext } from "react";
import { FetchOptions, FetchResponse } from "./types";
import { AuthContext } from "@/providers/AuthProvider";
import Endpoints from "../../Endpoints";

const useFetch = () => {
  const { token } = useContext(AuthContext);

  const _getHeaders = () => {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
  };

  const _fetch = async <E extends keyof Endpoints>(
    url: E,
    options?: FetchOptions
  ): FetchResponse<Endpoints[E]> => {
    const headers = _getHeaders();

    try {
      const response = await fetch(url, {
        headers,
        method: options?.method || "GET",
        body: options?.body ? JSON.stringify(options.body) : null,
      });

      const resContent = await response.json();

      if (!response.ok)
        return {
          success: false,
          error: {
            code: response.status,
            message:
              resContent.detail || "Não foi possível completar a requisição.",
          },
        };

      return {
        success: true,
        data: resContent,
      };
    } catch {
      return {
        success: false,
        error: {
          code: 500,
          message: "Ocorreu um erro inesperado.",
        },
      };
    }
  };

  return _fetch;
};

export default useFetch;
