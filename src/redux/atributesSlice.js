import { createSlice } from "@reduxjs/toolkit";

const attributeSlice = createSlice({
  name: "Attributes",
  initialState: {
    selectedCoin: null,
    isTight: false,
    imgCam: "",
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

export const logState = (state) => {
  console.log("Estado actual de Redux:", state);
};

export const { setAttributes, setImage } = attributeSlice.actions;

export default attributeSlice.reducer;
