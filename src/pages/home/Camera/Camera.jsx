import Webcam from "react-webcam";
import "./CameraStyle.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/LogoFooter1.png";
import { setImage, selectAttributes } from "../../../redux/atributesSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../../services/apiCalls";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const attributes = useSelector(selectAttributes);
  const [apiResult, setApiResult] = useState(null);
  const [imgCam, setImgCam] = useState(null);

  const navigateToResults = () => {
    if (apiResult !== null) {
      setTimeout(() => {}, 100);
      navigate("/results", { state: { resultData: apiResult } });
      console.log("navigate results: ", apiResult);
    }
  };

  const handleCapture = (imageSrc) => {
    console.log("imgString");
    // dispatch(setImage(imageSrc));
    setImgCam(imageSrc);
  };

  const calculateParam = async () => {
    try {
      const { selectedCoin, isTight } = attributes;

      if (imgCam !== null) {
        const response = await fetchApi(selectedCoin, isTight, imgCam);
        console.log("Respuesta de la API:", response.data);
        setApiResult(response.data);
      } else {
        console.error("Error: imgCam es null");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgCam !== null) {
        calculateParam();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [imgCam, attributes]);

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
          >
            {({ getScreenshot }) => (
              <button
                id="screenshotButton"
                onClick={() => {
                  const imageSrc = getScreenshot();
                  handleCapture(imageSrc);
                  console.log(imageSrc);
                  navigateToResults();
                }}
              >
                Capturar imagen
              </button>
            )}
          </Webcam>
        </div>
        <div id="logoCamera">
          <img id="camLogo" src={logo}></img>
        </div>
      </div>
    </>
  );
};

export default Camera;
