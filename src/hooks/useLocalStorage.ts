import { GridLocalStorage, LocalStorageKey } from "../types";

const useLocalStorage = (namespace: string) => {
  const getLayouts = () => {
    let ls: GridLocalStorage = {};
    const rgl8 = localStorage.getItem(namespace);

    if (rgl8) {
      try {
        ls = JSON.parse(rgl8) || {};
      } catch (e) {
        /*Ignore*/
      }
    }

    return ls["layouts"];
  };

  const save = (key: string, value: any) => {
    localStorage.setItem(
      namespace,
      JSON.stringify({
        [key]: value,
      })
    );
  };

  return { getLayouts, save };
};

export default useLocalStorage;
