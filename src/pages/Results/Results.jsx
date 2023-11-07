import "./ResultsStyles.css";
import Logo from "../../assets/LogoFooter1.png";
import { useNavigate } from "react-router-dom";
import Camera from "../home/Camera/Camera";

const Results = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="resultsDiv">
        <div id="results">
          <h3 id="titleResults">Los resultados son:</h3>
        </div>
      </div>

      <div id="buttonResults" onClick={() => navigate("/")}>
        <button id="volverResults">Volver</button>
      </div>
      <div id="imgResults">
        <img id="imgLogoResults" src={Logo} alt="Logo de la empresa"></img>
      </div>
    </>
  );
};

export default Results;
