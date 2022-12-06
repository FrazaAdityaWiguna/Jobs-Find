import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jwt: localStorage.getItem(`jwt`),
  googleId: "",
};

export const actionLogin = createSlice({
  name: "loginGoogle",
  initialState,
  reducers: {
    setJWT: (state, action) => {
      state.jwt = action.payload.tokenJWT;
      state.googleId = action.payload.googleId;
      localStorage.setItem(`jwt-${state.googleId}`, state.jwt);
    },
  },
});

export const { setJWT, removeJWT } = actionLogin.actions;
export default actionLogin.reducer;
