import Webcam from "react-webcam";
import "./CameraStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/LogoFooter1.png";
import { logState } from "../../../redux/atributesSlice";
import { setImage, selectAttributes } from "../../../redux/atributesSlice";
//importo RDX
import { useDispatch, useSelector } from "react-redux";

// import { selectedCoin, isTight, imgCam } from "../../../redux/atributesSlice";
import { store } from "../../../redux/store";
import { fetchApi } from "../../../services/apiCalls";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const attributes = useSelector(selectAttributes);

  //handle
  const handleStringCapture = (base64) => {
    console.log("imgString");
    dispatch(setImage(base64));
  };

  // //Traigo la informacion de redux
  // const moneda = useSelector(selectedCoin);
  // const ajustado = useSelector(isTight);
  // const baseSeisCuatro = useSelector(imgCam);

  const calculateParam = async () => {
    try {
      const { selectedCoin, isTight, imgCam } = attributes;
      const response = await fetchApi(selectedCoin, isTight, imgCam);
      console.log("Respuesta de la api;", response.data);
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
                handleStringCapture(imageSrc);
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
