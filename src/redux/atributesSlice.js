import { createSlice } from "@reduxjs/toolkit";

export const attributeSlice = createSlice({
  name: "Attributes",
  initialState: {
    selectedCoin: null,
    coinValue: null,
    isTight: false,
  },
  reducers: {
    setAttributes: (state, action) => {
      const { selectedCoin, coinValue, isTight } = action.payload;
      return {
        ...state,
        selectedCoin: selectedCoin,
        coinValue: coinValue,
        isTight: isTight,
      };
    },
  },
});

export const { setAttributes } = attributeSlice.actions;

export const selectAttributes = (state) => state.Attributes;

export default attributeSlice.reducer;
