import "./Home.css";

import { useNavigate } from "react-router-dom";
import HomeHeader from "./Header/HomeHeader";
import HomeContent from "./Content/HomeContent";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const navigate = useNavigate();

  function NavigateToCamera() {
    console.log("test...");
    navigate("/camera");
  }

  return (
    <>
      <HomeHeader />
      <HomeContent />

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

      <Footer />
    </>
  );
};

export default Home;
