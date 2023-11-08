import axios from "axios";

const apiUrl = "https://test.aitaca.io/Aitaca/1.0.0/calculator";

export const fetchApi = async (selectedCoin, isTight, imgCam) => {
  const fitting = isTight ? "fitted" : "loose";

  const params = new URLSearchParams();
  params.append("coin", selectedCoin);
  params.append("fitting", fitting);

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "maxi",
  };

  return axios.post(
    `${apiUrl}?${params.toString()}`,
    { hand: imgCam },
    { headers }
  );
};
