// import Webcam from "react-webcam";
// import "./CameraStyle.css";
// import { useNavigate } from "react-router-dom";

// import logo from "../../../assets/LogoFooter1.png";

// const videoConstraints = {
//   facingMode: "user",
// };

// export const Camera = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div id="pageCamera">
//         <button
//           id="returnButton"
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           Volver
//         </button>
//         <Webcam
//           id="camera"
//           audio={false}
//           screenshotFormat="image/jpeg"
//           videoConstraints={videoConstraints}
//         >
//           {({ getScreenshot }) => (
//             <button
//               id="screenshotButton"
//               onClick={() => {
//                 const imageSrc = getScreenshot();
//                 console.log(imageSrc);
//               }}
//             >
//               Capturar imagen
//             </button>
//           )}
//         </Webcam>
//         <div id="logoCamera">
//           <img id="camLogo" src={logo}></img>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Camera;

//////////////////////////////

import Webcam from "react-webcam";
import "./CameraStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/LogoFooter1.png";
import { logState } from "../../../redux/atributesSlice";

//importo RDX
import { useDispatch, useSelector } from "react-redux";
import { setAttributes } from "../../../redux/atributesSlice";
import { store } from "../../../redux/store";

const videoConstraints = {
  facingMode: "user",
};

export const Camera = () => {
  const moneda = useSelector((state) => state.selectedCoin);
  const ajustado = useSelector((state) => state.isTight);
  const dispatch = useDispatch();
  const imgCamInRedux = useSelector((state) => state.imgCam);
  const navigate = useNavigate();

  //handle
  const handleStringCapture = (string) => {
    console.log("imgString");
    dispatch(setAttributes({ imgCam: string }));
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
