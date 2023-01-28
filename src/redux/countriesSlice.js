import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    modeSetting: false,
  },
  reducers: {
    setMode: (state, action) => {
      state.modeSetting = action.payload;
    },
  },
});

export const { setMode } = countriesSlice.actions;
export default countriesSlice.reducer;
