import axios from "axios";

const apiUrl = "https://test.aitaca.io/Aitaca/1.0.0/calculator";

export const fetchApi = async (selectedCoin, isTight, imgCam) => {
  const dataRequest = {
    coin: selectedCoin,
    fitting: isTight ? "fitted" : "loose",
  };

  const requestBody = {
    ...dataRequest,
    hand: imgCam,
  };

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "maxi",
  };
  return axios.post(apiUrl, requestBody, { headers });
};
