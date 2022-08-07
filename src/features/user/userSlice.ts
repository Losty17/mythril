import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { User } from "../../types";

// Define a type for the slice state
interface UserState {
  value: User | undefined;
}

const getUser = () => {
  const localUser = localStorage.getItem("user");
  if (localUser) {
    const user: User = JSON.parse(localUser);

    if (parseInt(user.tokenExpiration) > Infinity) {
      fetch("/api/auth", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "validate", token: user.token }),
      }).then((res) => {
        if (!res.ok) return undefined;
      });
    }

    return user;
  }

  return undefined;
};

export const userSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    value: getUser(),
  } as UserState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    removeUser: (state: UserState) => {
      state.value = undefined;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.value;

export default userSlice.reducer;
