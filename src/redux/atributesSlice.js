import { createSlice, createSelector } from "@reduxjs/toolkit";

const attributeSlice = createSlice({
  name: "Attributes",
  initialState: {
    selectedCoin: null,
    isTight: false,
    imgCam: null,
  },
  reducers: {
    setAttributes: (state, action) => {
      const { selectedCoin, isTight } = action.payload;
      state.selectedCoin = selectedCoin;
      state.isTight = isTight;
    },
    setImage: (state, action) => {
      state.imgCam = action.payload;
    },
  },
});

export const selectAttributes = createSelector(
  (state) => state.selectedCoin,
  (state) => state.isTight,
  (state) => state.imgCam,
  (selectedCoin, isTight, imgCam) => ({ selectedCoin, isTight, imgCam })
);
// export const { selectedCoin, isTight, imgCam } = attributeSlice.actions;

export const logState = (state) => {
  console.log("Estado actual de Redux:", state);
};

export const { setAttributes, setImage } = attributeSlice.actions;

export default attributeSlice.reducer;
