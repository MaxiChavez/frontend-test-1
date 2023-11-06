import Webcam from "react-webcam";
import "./CameraStyle.css";

import { useNavigate } from "react-router-dom";

import logo from "../../../assets/LogoFooter1.png";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const navigate = useNavigate();
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
                console.log(imageSrc);
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
