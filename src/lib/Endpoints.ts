export type UserResponse = {
  first_name: string;
  last_name: string;
  profile_picture: string;
  theme: "light" | "dark";
};

export type Endpoints = {
  "/users/me": UserResponse;
};

export default Endpoints;
