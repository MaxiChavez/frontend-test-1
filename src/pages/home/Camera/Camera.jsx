// import { useState, useEffect, useRef } from "react";
// import "./CameraStyle.css";
// import Webcam from "react-webcam";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { fetchApi } from "../../../services/apiCalls";
// import { selectAttributes } from "../../../redux/atributesSlice";
// import logoWhite from "../../../assets/logoWhite.png";
// import switchCam from "../../../assets/switch-camera.png";

// const FACING_MODE_USER = "user";
// const FACING_MODE_ENVIRONMENT = "environment";

// const videoConstraints = {
//   facingMode: FACING_MODE_USER,
// };

// const Camera = () => {
//   const navigate = useNavigate();
//   const attributes = useSelector(selectAttributes);
//   const [apiResult, setApiResult] = useState(null);
//   const [imgCam, setImgCam] = useState(null);
//   const webcamRef = useRef(null);
//   const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

//   useEffect(() => {
//     // Verificar si la cámara principal está disponible
//     navigator.mediaDevices.enumerateDevices().then((devices) => {
//       const hasPrincipalCamera = devices.some(
//         (device) =>
//           device.kind === "videoinput" && device.label.includes("back")
//       );

//       // Si hay una cámara principal, cambiar los videoConstraints
//       if (hasPrincipalCamera) {
//         setFacingMode(FACING_MODE_ENVIRONMENT);
//       }
//     });
//   }, []);

//   const handleCapture = async () => {
//     try {
//       const { selectedCoin, isTight } = attributes;
//       const imageSrc = webcamRef.current.getScreenshot();

//       if (imageSrc !== null) {
//         setImgCam(imageSrc);
//         const response = await fetchApi(selectedCoin, isTight, imageSrc);
//         setApiResult(response.data);

//         navigate("/results", { state: { resultData: response.data } });
//       } else {
//         console.error("imageSrc is null");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleClick = () => {
//     setFacingMode((prevState) =>
//       prevState === FACING_MODE_USER
//         ? FACING_MODE_ENVIRONMENT
//         : FACING_MODE_USER
//     );
//   };

//   return (
//     <>
//       <div id="pageCamera">
//         <Webcam
//           id="camera"
//           audio={false}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{
//             ...videoConstraints,
//             facingMode,
//           }}
//           ref={webcamRef}
//           onUserMedia={() => {
//             document.getElementById("camera").style.backgroundImage = 'url("")';
//           }}
//         />
//         <div id="icon" onClick={handleClick}>
//           <img src={switchCam} alt="Switch Camera"></img>
//         </div>
//         <div id="bothButtons">
//           <button
//             id="returnButton"
//             onClick={() => {
//               navigate("/");
//             }}
//           >
//             Volver
//           </button>
//           <button id="screenshotButton" onClick={handleCapture}>
//             Capturar imagen
//           </button>
//         </div>
//         <div id="logoCamera">
//           <img id="camWhite" src={logoWhite} alt="Logo"></img>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Camera;

import { useState, useEffect, useRef } from "react";
import "./CameraStyle.css";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchApi } from "../../../services/apiCalls";
import { selectAttributes } from "../../../redux/atributesSlice";
import logoWhite from "../../../assets/logoWhite.png";
import switchCam from "../../../assets/switch-camera.png";

const FACING_MODE_USER = "user"; //camara frontal
const FACING_MODE_ENVIRONMENT = "environment"; //camara

const videoConstraints = {
  facingMode: FACING_MODE_ENVIRONMENT,
};

const Camera = () => {
  const navigate = useNavigate();
  const attributes = useSelector(selectAttributes);
  const [apiResult, setApiResult] = useState(null);
  const [imgCam, setImgCam] = useState(null);
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_ENVIRONMENT);

  useEffect(() => {
    // Verificar si la cámara principal está disponible
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const hasPrincipalCamera = devices.some(
        (device) =>
          device.kind === "videoinput" && device.label.includes("back")
      );

      // Si hay una cámara principal, cambiar los videoConstraints
      if (hasPrincipalCamera) {
        setFacingMode(FACING_MODE_ENVIRONMENT);
      } else {
        setFacingMode(FACING_MODE_USER);
      }
    });
  }, []);

  const handleCapture = async () => {
    try {
      const { selectedCoin, isTight } = attributes;
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc !== null) {
        setImgCam(imageSrc);
        const response = await fetchApi(selectedCoin, isTight, imageSrc);
        setApiResult(response.data);

        navigate("/results", { state: { resultData: response.data } });
      } else {
        console.error("imageSrc is null");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = () => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  };

  return (
    <>
      <div id="pageCamera">
        <Webcam
          id="camera"
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            ...videoConstraints,
            facingMode,
          }}
          ref={webcamRef}
          onUserMedia={() => {
            document.getElementById("camera").style.backgroundImage = 'url("")';
          }}
        />
        <div id="icon" onClick={handleClick}>
          <img src={switchCam} alt="Switch Camera"></img>
        </div>
        <div id="bothButtons">
          <button
            id="returnButton"
            onClick={() => {
              navigate("/");
            }}
          >
            Volver
          </button>
          <button id="screenshotButton" onClick={handleCapture}>
            Capturar imagen
          </button>
        </div>
        <div id="logoCamera">
          <img id="camWhite" src={logoWhite} alt="Logo"></img>
        </div>
      </div>
    </>
  );
};

export default Camera;
