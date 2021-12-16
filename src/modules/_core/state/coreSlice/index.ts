import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initState";

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    // 'The increment by amount' action here, has one job and that is to take whatever value is passed to it and add that to state.value.
    // The PayloadAction type here is used to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = coreSlice.actions;

// exporting the reducer here, as we need to add this to the store
export default coreSlice.reducer;
