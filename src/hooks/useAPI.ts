interface RequestProps {
  [key: string]: string;
}

const useAPI = () => {
  const post = async (url: string, body: RequestProps) => {
    const data = await fetch(url, {
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

  return { post };
};

export default useAPI;
