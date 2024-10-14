import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  language:'en'
};

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.language = action.payload
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;