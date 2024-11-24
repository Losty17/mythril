export enum ThemeOption {
  Cyberpunk = "cyberpunk",
  Light = "light",
  Dark = "dark",
}

const setTheme = (theme: ThemeOption) => {
  document.documentElement.setAttribute("data-theme", theme);
};

export default setTheme;
