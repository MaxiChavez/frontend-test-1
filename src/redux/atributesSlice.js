import { createSlice, createSelector } from "@reduxjs/toolkit";

const attributeSlice = createSlice({
  name: "Attributes",
  initialState: {
    selectedCoin: null,
    isTight: false,
  },
  reducers: {
    setAttributes: (state, action) => {
      const { selectedCoin, isTight } = action.payload;
      state.selectedCoin = selectedCoin;
      state.isTight = isTight;
    },
  },
});

export const selectAttributes = createSelector(
  (state) => state.selectedCoin,
  (state) => state.isTight,

  (selectedCoin, isTight) => ({ selectedCoin, isTight })
);

export const logState = (state) => {
  console.log("Estado actual de Redux:", state);
};

export const { setAttributes } = attributeSlice.actions;

export const selectResultData = (state) => state.Attributes.resultData;

export default attributeSlice.reducer;
