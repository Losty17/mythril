const classNames = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(" ");

const classNamesNoSpaces = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join("");

export { classNamesNoSpaces };
export default classNames;
