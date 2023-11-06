import "./HomeBottomStyle.css";
import { useNavigate } from "react-router-dom";

const HomeBottom = () => {
  const navigate = useNavigate();

  function NavigateToCamera() {
    console.log("test...");
    navigate("/camera");
  }

  return (
    <div id="buttonContinue">
      <div className="buttonsNextBack">
        <button id="volver">Volver</button>
      </div>
      <div className="buttonsNextBack">
        <button id="siguiente" onClick={() => NavigateToCamera()}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default HomeBottom;
