import Webcam from "react-webcam";
import "./CameraStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/LogoFooter1.png";
import { logState } from "../../../redux/atributesSlice";
import { setImage } from "../../../redux/atributesSlice";
//importo RDX
import { useDispatch } from "react-redux";
import { store } from "../../../redux/store";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle
  const handleStringCapture = (base64) => {
    console.log("imgString");
    dispatch(setImage(base64));
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
                handleStringCapture(imageSrc);
                console.log(imageSrc);
                logState(store.getState());
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
