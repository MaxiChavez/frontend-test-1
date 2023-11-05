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
        <h3>Seleciona moneda</h3>
        <p>
          Para la correcta medición es nesario el uso de una moneda en el centro
          de la palmda de tu mano.
        </p>
        <h2> Puedes usar una de estas monedas </h2>
        <div className="coins">
          <div>
            <img src={dos} alt="moneda 2 Euros" />
          </div>

          <div>
            <img src={uno} alt="moneda un Euro" />
          </div>
          <div>
            <img src={cincuenta} alt="moneda 50 centimos" />
          </div>
          <div>
            <img src={veinte} alt="moneda veinte centimos" />
          </div>
          <div>
            <img src={cinco} alt="moneda 5 centimos" />
          </div>
        </div>
        <h3>Coloca la moneda en el centro de la palma de tu mano</h3>
        <div className="hand">
          <img id="imgHand"></img>
        </div>
        <h3>¿Cómo te gusta llevar el anillo?</h3>
        <div>
          <img src={hand} alt="Mano con moneda" />
        </div>
        <div>
          <label htmlFor="ajustado">Ajustado</label>
          <input
            id="ajustado"
            type="radio"
            name="estilo_anillo"
            value="ajustado"
          />

          <div></div>
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
