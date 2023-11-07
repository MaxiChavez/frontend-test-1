import "./HomeContentStyle.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dos from "../../../assets/2.png";
import uno from "../../../assets/1.png";
import cincuenta from "../../../assets/50.png";
import veinte from "../../../assets/20.png";
import cinco from "../../../assets/5.png";
import hand from "../../../assets/hand.png";
import checking from "../../../assets/checking.png";
import { useDispatch } from "react-redux";
import { setAttributes } from "../../../redux/atributesSlice";

const HomeContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isTight, setIsTight] = useState(true);


  const handleIsTight = (value) => {
    setIsTight(value);
    dispatch(setAttributes({ isTight: value }));
  }

  const handleCoinClick = (coin) => {
    console.log(coin);
    setSelectedCoin(coin);
    dispatch(setAttributes({ selectedCoin: coin}));
  };

  const NavigateToCamera = () => {
    //dispatch(saveData());
    dispatch(setAttributes({ selectedCoin, isTight }));
    navigate("/camera");
  };

  return (
    <>
      <section id="main">
        <p className="subTitle">Puedes usar una de estas monedas</p>
        <div className="coins">
          <div
            onClick={() => handleCoinClick(2.00)}
            className={`monedas ${selectedCoin === 2.00 ? "selected" : ""}`}
          >
            <img className="monedas" src={dos} alt="moneda 2 Euros" />
          </div>

          <div
            onClick={() => handleCoinClick(1.00)}
            className={`monedas ${selectedCoin === 1.00 ? "selected" : ""}`}
          >
            <img className="monedas" src={uno} alt="moneda un Euro" />
          </div>
          <div
            onClick={() => handleCoinClick(0.50)}
            className={`monedas ${selectedCoin === 0.50 ? "selected" : ""}`}
          >
            <img className="monedas" src={cincuenta} alt="moneda 50 centimos" />
          </div>
          <div
            onClick={() => handleCoinClick(0.20)}
            className={`monedas ${selectedCoin === 0.20 ? "selected" : ""}`}
          >
            <img
              className="monedas"
              src={veinte}
              alt="moneda veinte centimos"
            />
          </div>
          <div
            onClick={() => handleCoinClick(0.05)}
            className={`monedas ${selectedCoin === 0.05 ? "selected" : ""}`}
          >
            <img className="monedas" src={cinco} alt="moneda 5 centimos" />
          </div>
        </div>
        <p className="subTitle">
          Coloca la moneda en el centro de la palma de tu mano
        </p>

        <div className="hand">
          <img id="imgHand" src={hand} alt="imagen de mano" />
        </div>

        <p className="subTitle">¿Cómo te gusta llevar el anillo?</p>

        <div
          className={
            isTight
              ? "pruebaButton checkedButton clicked"
              : "pruebaButton"
          }
          onClick={() => handleIsTight(true)}
        >
          <div className="optionCheck">
            <p>Ajustado</p>
          </div>
          <div className="check">
            {isTight && <img src={checking} alt="icon check" />}
          </div>
        </div>

        <div
          className={
            isTight
              ? "pruebaButton"
              : "pruebaButton checkedButton clicked"
          }
          onClick={() => handleIsTight(false)}
        >
          <div className="optionCheck">
            <p>Suelto</p>
          </div>
          <div className="check">
            {!isTight && <img src={checking} alt="icon check" />}
          </div>
        </div>
      </section>

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
    </>
  );
};
export default HomeContent;
