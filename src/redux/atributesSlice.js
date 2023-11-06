import { createSlice } from "@reduxjs/toolkit";

const attributeSlice = createSlice({
  name: "Attributes",
  initialState: {
    selectedCoin: null,
    coinValue: null,
    isTight: false,
  },
  reducers: {
    setAttributes: (state, action) => {
      const { selectedCoin, coinValue, isTight } = action.payload;
      state.selectedCoin = selectedCoin;
      state.coinValue = coinValue;
      state.isTight = isTight;
    },
  },
});

export const { setAttributes } = attributeSlice.actions;

export default attributeSlice.reducer;
