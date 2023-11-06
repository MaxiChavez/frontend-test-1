import "./HomeContentStyle.css";
import { useState } from "react";

import dos from "../../../assets/2.png";
import uno from "../../../assets/1.png";
import cincuenta from "../../../assets/50.png";
import veinte from "../../../assets/20.png";
import cinco from "../../../assets/5.png";
import hand from "../../../assets/hand.png";

import checking from "../../../assets/checking.png";

const HomeContent = () => {
  const [isAjustadoChecked, setIsAjustadoChecked] = useState(false);
  const [isSueltoChecked, setIsSueltoChecked] = useState(false);

  const handleAjustadoClick = () => {
    console.log("Ajustado");
    setIsAjustadoChecked(!isAjustadoChecked);
    setIsSueltoChecked(false);
  };

  const handleSueltoClick = () => {
    console.log("suelto");

    setIsSueltoChecked(!isSueltoChecked);
    setIsAjustadoChecked(false);
  };

  return (
    <section id="main">
      <p className="subTitle"> Puedes usar una de estas monedas </p>
      <div className="coins">
        <div>
          <img className="monedas" src={dos} alt="moneda 2 Euros" />
        </div>

        <div>
          <img className="monedas" src={uno} alt="moneda un Euro" />
        </div>
        <div>
          <img className="monedas" src={cincuenta} alt="moneda 50 centimos" />
        </div>
        <div>
          <img className="monedas" src={veinte} alt="moneda veinte centimos" />
        </div>
        <div>
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
          isAjustadoChecked
            ? "pruebaButton checkedButton clicked"
            : "pruebaButton"
        }
        onClick={handleAjustadoClick}
      >
        <div className="optionCheck">
          <p>Ajustado</p>
        </div>
        <div className="check">
          {isAjustadoChecked && <img src={checking} alt="icon check" />}
        </div>
      </div>

      <div
        className={
          isSueltoChecked
            ? "pruebaButton checkedButton clicked"
            : "pruebaButton"
        }
        onClick={handleSueltoClick}
      >
        <div className="optionCheck">
          <p>Suelto</p>
        </div>
        <div className="check">
          {isSueltoChecked && <img src={checking} alt="icon check" />}
        </div>
      </div>
    </section>
  );
};
export default HomeContent;
