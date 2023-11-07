import axios from "axios";

const apiUrl = "https://test.aitaca.io/Aitaca/1.0.0/ui/";

const apiKey = "maximiliano";

export const fetchApi = async (selectedCoin, isTight, imgCam) => {
  const dataRequest = {
    coin: selectedCoin,
    fitting: isTight ? "fitted" : "loose",
    imgCam: imgCam,
  };
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  return axios.post(apiUrl, dataRequest, { headers });
};
