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
    saveData: (state) => {
      state.savedData = {
        selectedCoin: state.selectedCoin,
        coinValue: state.coinValue,
        isTight: state.isTight,
      };
      console.log("Datos guardados en Redux:", state.savedData);
      // state.selectedCoin = null;
      // state.coinValue = null;
      // state.isTight = false;
    },
  },
});

export const { setAttributes, saveData } = attributeSlice.actions;

export default attributeSlice.reducer;
