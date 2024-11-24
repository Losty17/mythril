export type User = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  theme: "light" | "dark";
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: User | undefined;
  token: string | null;
  login: () => void;
  logout: () => void;
};
