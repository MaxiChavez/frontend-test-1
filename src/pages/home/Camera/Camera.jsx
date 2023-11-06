import Webcam from "react-webcam";
import "./CameraStyle.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const navigate = useNavigate();
  return (
    <>
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
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "50%",
          marginLeft: "-50%",
          objectFit: "cover",
          objectPosition: "center",
        }}
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
    </>
  );
};

export default Camera;
