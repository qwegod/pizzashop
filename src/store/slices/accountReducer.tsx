import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorized: false,
  name: "",
  email: "",
  avatarPath: "",
  card: { number: 0, name: "", date: "" }
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state) => {
      state.authorized = true;
    },
    logout: (state) => {
      state.authorized = false;
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setAvatarPath: (state, action) => {
      state.avatarPath = action.payload
    },
    setCard: (state, action) => {
      state.card = action.payload
    }
  },
});

export const { login, logout, setName, setEmail, setAvatarPath, setCard } = accountSlice.actions;

export default accountSlice.reducer;
