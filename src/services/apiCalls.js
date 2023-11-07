import axios from "axios";

const apiUrl =
  "https://test.aitaca.io/Aitaca/1.0.0/ui/#/default/extracts_measurements_from_input_images_measurements_extraction_post";

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
