import useSWR from "swr";

interface RequestProps {
  [key: string]: string;
}
const getPath = (url: string) => (url.startsWith("/api") ? url : `/api${url}`);

export const useAPI = () => {
  const _post = async (url: string, body: RequestProps) => {
    const path = url.startsWith("/api") ? url : `/api${url}`;
    const data = await fetch(path, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    });

    return await data.json();
  };

  return { post: _post };
};

// export default useAPI;

export const useGet = (url: string) => {
  const { data, error } = useSWR(getPath(url), async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  });

  return { data, error };
};

export const usePost = (url: string, body: RequestProps) => {
  const { data, error } = useSWR(getPath(url), async (url) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    });
    const data = await response.json();

    return { data, response };
  });

  return { ...data, error };
};
