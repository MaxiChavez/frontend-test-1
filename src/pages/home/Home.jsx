import "./Home.css";

import dos from "../../assets/2.png";
import uno from "../../assets/1.png";
import cincuenta from "../../assets/50.png";
import veinte from "../../assets/20.png";
import cinco from "../../assets/5.png";
import hand from "../../assets/hand.png";

const Home = () => {
  return (
    <>
      <section id="main">
        <h3 id="selecCoin">Selecciona moneda</h3>
        <p className="pMain">
          Para la correcta medición es necesario el uso de una moneda en el
          centro de la palma de tu mano.
        </p>
        <p className="pSubTitle"> Puedes usar una de estas monedas </p>
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
            <img
              className="monedas"
              src={veinte}
              alt="moneda veinte centimos"
            />
          </div>
          <div>
            <img className="monedas" src={cinco} alt="moneda 5 centimos" />
          </div>
        </div>
        <p className="pSubTitle">
          Coloca la moneda en el centro de la palma de tu mano
        </p>

        <div className="hand">
          <img id="imgHand" src={hand}></img>
        </div>

        <p className="pSubTitle">¿Cómo te gusta llevar el anillo?</p>

        <div>
          <label htmlFor="ajustado">Ajustado</label>
          <input
            id="ajustado"
            type="radio"
            name="estilo_anillo"
            value="ajustado"
          />

          <div>
            <label htmlFor="suelto">Suelto</label>
            <input
              id="suelto"
              type="radio"
              name="estilo_anillo"
              value="suelto"
            />
          </div>
        </div>
      </section>
      <div className="buttonsNextBack">
        <button>Volver</button>
        <button>Siguiente</button>
      </div>
    </>
  );
};

export default Home;
