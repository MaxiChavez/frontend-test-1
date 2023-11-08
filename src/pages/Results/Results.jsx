import "./ResultsStyles.css";
import Logo from "../../assets/LogoFooter1.png";
import { useNavigate, useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultData = location.state ? location.state.resultData : null;

  if (!resultData) {
    return (
      <div>
        <p>No tenemos datos de resultado</p>
      </div>
    );
  }

  return (
    <>
      <div id="resultsDiv">
        <div id="results">
          <h3 id="titleResults">Los resultados son:</h3>
          <p>{resultData}</p>
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
