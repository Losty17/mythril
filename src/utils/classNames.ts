const classNames = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(" ");

export default classNames;
