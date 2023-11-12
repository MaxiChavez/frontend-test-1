import { createSlice, createSelector } from "@reduxjs/toolkit";

export const attributeSlice = createSlice({
  name: "attributesSlice",
  initialState: {
    selectedCoin: null,
    isTight: false
  },
  reducers: {
    setAttributes: (state, action) => {
      const { selectedCoin, isTight } = action.payload;
      state.selectedCoin = selectedCoin;
      state.isTight = isTight;
    }
  },
});

export const selectAttributes = createSelector(
  (state) => state.selectedCoin,
  (state) => state.isTight,
  (selectedCoin, isTight) => ({ selectedCoin, isTight })
);

export const { setAttributes } = attributeSlice.actions;

export const getAttributes = (state) => state;

export default attributeSlice.reducer;
