import React from "react";
import Webcam from "react-webcam";
import "./CameraStyle.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/LogoFooter1.png";
import { useSelector } from "react-redux";
import { fetchApi } from "../../../services/apiCalls";
import { selectAttributes } from "../../../redux/atributesSlice";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const navigate = useNavigate();
  const attributes = useSelector(selectAttributes);
  const [apiResult, setApiResult] = useState(null);
  const [imgCam, setImgCam] = useState(null);

  const handleCapture = async () => {
    try {
      const { selectedCoin, isTight } = attributes;
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc !== null) {
        setImgCam(imageSrc);
        const response = await fetchApi(selectedCoin, isTight, imageSrc);
        console.log("Respuesta de la API:", response.data);
        setApiResult(response.data);
        navigate("/results", { state: { resultData: response.data } });
        console.log("navigate results: ", response.data);
      } else {
        console.error("imageSrc es null");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const webcamRef = React.useRef(null);

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
        <div id="web">
          <Webcam
            id="camera"
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            ref={webcamRef}
          />
          <button id="screenshotButton" onClick={handleCapture}>
            Capturar imagen
          </button>
        </div>
        <div id="logoCamera">
          <img id="camLogo" src={logo} alt="Logo"></img>
        </div>
      </div>
    </>
  );
};

export default Camera;
