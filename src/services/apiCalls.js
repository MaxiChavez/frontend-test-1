import axios from "axios";

const apiUrl = "https://test.aitaca.io/Aitaca/1.0.0/calculator";

export const fetchApi = async (selectedCoin, isTight, imgCam) => {
  const fitting = isTight ? "fitted" : "loose";
  console.log(imgCam);

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "maxi",
  };

  return axios.post(
    `${apiUrl}?coin=${selectedCoin}&fitting=${fitting}`,
    { hand: imgCam },
    { headers }
  );
};
