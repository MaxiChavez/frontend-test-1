import Webcam from "react-webcam";
import "./CameraStyle.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/LogoFooter1.png";
import { logState } from "../../../redux/atributesSlice";
import { setImage, selectAttributes } from "../../../redux/atributesSlice";
//importo RDX
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../redux/store";
import { fetchApi } from "../../../services/apiCalls";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const attributes = useSelector(selectAttributes);
  const [apiResult, setApiResult] = useState(null);

  const navigateToResults = () => {
    if (apiResult !== null) {
      navigate("/results", { state: { resultData: apiResult } });
    }
  };

  //handle
  const handleCapture = (imageSrc) => {
    console.log("imgString");
    dispatch(setImage(imageSrc));
  };

  const calculateParam = async () => {
    try {
      const { selectedCoin, isTight, imgCam } = attributes;

      if (imgCam !== null) {
        const response = await fetchApi(selectedCoin, isTight, imgCam);
        console.log("Respuesta de la API:", response.data);
        setApiResult(response.data);
        navigateToResults();
        //  navigate("/results", { state: { resultData: response.data } });
      } else {
        console.error("Error: imgCam es null");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div id="pageCamera">
        <button
          id="returnButton"
          onClick={() => {
            navigate("/");
          }}
        >
          Volver
        </button>
        <Webcam
          id="camera"
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <button
              id="screenshotButton"
              onClick={() => {
                const imageSrc = getScreenshot();
                handleCapture(imageSrc);
                console.log(imageSrc);
                logState(store.getState());
                calculateParam();
              }}
            >
              Capturar imagen
            </button>
          )}
        </Webcam>
        <div id="logoCamera">
          <img id="camLogo" src={logo}></img>
        </div>
      </div>
    </>
  );
};

export default Camera;
