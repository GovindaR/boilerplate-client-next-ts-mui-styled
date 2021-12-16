import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LangType } from "../../../../types";
import initialState from "./initState";

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<LangType>) => {
      state.lang = action.payload;
      state.locale = action.payload;
    },
    changeDir: (state) => {
      state.rtl = !state.rtl;
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { changeLang, changeDir, toggleTheme } = settingsSlice.actions;

// exporting the reducer here, as we need to add this to the store
export default settingsSlice.reducer;
