import "./Home.css";

import HomeHeader from "../Header/Homeheader";
import HomeContent from "../../components/content/HomeContent";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeContent />

      <div id="buttonContinue">
        <div className="buttonsNextBack">
          <button id="volver">Volver</button>
        </div>
        <div className="buttonsNextBack">
          <button id="siguiente">Siguiente</button>
        </div>
      </div>
    </>
  );
};

export default Home;
