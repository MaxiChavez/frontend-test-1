import "./HomeBottomStyle.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveData } from "../../../redux/atributesSlice";

const HomeBottom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function NavigateToCamera() {
    dispatch(saveData());
    console.log(saveData());
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
