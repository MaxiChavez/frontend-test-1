import "./HomeContentStyle.css";

import dos from "../../../assets/2.png";
import uno from "../../../assets/1.png";
import cincuenta from "../../../assets/50.png";
import veinte from "../../../assets/20.png";
import cinco from "../../../assets/5.png";
import hand from "../../../assets/hand.png";
import icon from "../../../assets/icon.png";
import cheking from "../../../assets/checking.png";

const HomeContent = () => {
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
        <img id="imgHand" src={hand}></img>
      </div>

      <p className="subTitle">¿Cómo te gusta llevar el anillo?</p>

      <div className="pruebaButton">
        <div className="optionCheck">
          <p>Ajustado</p>
        </div>
        <div className="check">
          <img src={cheking} alt="icon check" />
        </div>
      </div>

      <div className="pruebaButton">
        <div className="optionCheck">
          <p>Suelto</p>
        </div>
        <div className="check">
          <img src={cheking} alt="icon check" />
        </div>
      </div>
    </section>
  );
};
export default HomeContent;
