// import React from "react";
// import Webcam from "react-webcam";
// import "./CameraStyle.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../../assets/onlyLogo.png";
// import { useSelector } from "react-redux";
// import { fetchApi } from "../../../services/apiCalls";
// import { selectAttributes } from "../../../redux/atributesSlice";
// import logoWhite from "../../../assets/logoWhite.png";
// import switchCam from "../../../assets/switch-camera.png";

// const videoConstraints = {
//   facingMode: "user",
// };

// export const Camera = () => {
//   const navigate = useNavigate();
//   const attributes = useSelector(selectAttributes);
//   const [apiResult, setApiResult] = useState(null);
//   const [imgCam, setImgCam] = useState(null);

//   const handleCapture = async () => {
//     try {
//       const { selectedCoin, isTight } = attributes;
//       const imageSrc = webcamRef.current.getScreenshot();

//       if (imageSrc !== null) {
//         setImgCam(imageSrc);
//         const response = await fetchApi(selectedCoin, isTight, imageSrc);
//         console.log("Respuesta de la API:", response.data);
//         setApiResult(response.data);
//         navigate("/results", { state: { resultData: response.data } });
//         console.log("navigate results: ", response.data);
//       } else {
//         console.error("imageSrc es null");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const webcamRef = React.useRef(null);

//   return (
//     <>
//       <div id="pageCamera">
//         <Webcam
//           id="camera"
//           audio={false}
//           screenshotFormat="image/jpeg"
//           videoConstraints={videoConstraints}
//           ref={webcamRef}
//           onUserMedia={() => {
//             document.getElementById("camera").style.backgroundImage = 'url("")';
//           }}
//         />
//         <div id="icon">
//           <img src={switchCam}></img>
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

////////////con boton//////////

// import { useState, useRef } from "react";
// import "./CameraStyle.css";

// import Webcam from "react-webcam";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { fetchApi } from "../../../services/apiCalls";
// import { selectAttributes } from "../../../redux/atributesSlice";
// import logoWhite from "../../../assets/logoWhite.png";
// import switchCam from "../../../assets/switch-camera.png";

// const videoConstraints = {
//   facingMode: "user",
// };

// export const Camera = () => {
//   const navigate = useNavigate();
//   const attributes = useSelector(selectAttributes);
//   const [apiResult, setApiResult] = useState(null);
//   const [imgCam, setImgCam] = useState(null);
//   const webcamRef = useRef(null);

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

//   const handleSwitchCamera = () => {
//     // Cambiar el modo de la cámara entre "user" y "environment"
//     const newFacingMode =
//       videoConstraints.facingMode === "user" ? "environment" : "user";
//     videoConstraints.facingMode = newFacingMode;
//     webcamRef.current.videoConstraints = videoConstraints;
//   };

//   return (
//     <>
//       <div id="pageCamera">
//         <div id="webICon">
//           <Webcam
//             id="camera"
//             audio={false}
//             screenshotFormat="image/jpeg"
//             videoConstraints={videoConstraints}
//             ref={webcamRef}
//             onUserMedia={() => {
//               document.getElementById("camera").style.backgroundImage =
//                 'url("")';
//             }}
//           />
//           <div id="icon" onClick={handleSwitchCamera}>
//             <img src={switchCam} alt="Switch Camera"></img>
//           </div>
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

///////////
import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchApi } from "../../../services/apiCalls";
import { selectAttributes } from "../../../redux/atributesSlice";
import logoWhite from "../../../assets/logoWhite.png";
import switchCam from "../../../assets/switch-camera.png";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

const Camera = () => {
  const navigate = useNavigate();
  const attributes = useSelector(selectAttributes);
  const [apiResult, setApiResult] = useState(null);
  const [imgCam, setImgCam] = useState(null);
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

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
