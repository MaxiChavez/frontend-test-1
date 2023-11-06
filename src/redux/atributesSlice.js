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
      const { selectedCoin, isTight, imgCam } = action.payload;
      state.selectedCoin = selectedCoin;
      state.isTight = isTight;
      state.imgCam = imgCam;
    },
    saveData: (state) => {
      state.savedData = {
        selectedCoin: state.selectedCoin,
        isTight: state.isTight,
        imgCam: state.imgCam,
      };
      console.log("Datos guardados en Redux:", state.savedData);

      // state.selectedCoin = null;
      // state.coinValue = null;
      // state.isTight = false;
    },
  },
});

export const logState = (state) => {
  console.log("Estado actual de Redux:", state);
};
export const { setAttributes, saveData } = attributeSlice.actions;

export default attributeSlice.reducer;
