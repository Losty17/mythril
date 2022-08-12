const normalize = (str: string) =>
  str
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default normalize;
