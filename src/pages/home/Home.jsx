import "./Home.css";

import HomeHeader from "./Header/HomeHeader";
import HomeContent from "./Content/HomeContent";
import Footer from "../../components/footer/Footer";
import HomeBottom from "./Bottom/HomeBottom";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeContent />
      <HomeBottom />
      <Footer />
    </>
  );
};

export default Home;
