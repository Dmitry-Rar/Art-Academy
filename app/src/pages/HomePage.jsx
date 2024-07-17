import "./styles/App.css";
import Shapka from "./components/Shapka.jsx";
import AboutAcademy from "./components/About_Academy.jsx";
import Music from "./components/Music.jsx";
import Acting from "./components/Acting.jsx";
import Painting from "./components/Painting.jsx";

function HomePage() {
  return (
    <>
      <Shapka/>
      <AboutAcademy/>
      <Music/>
      <Acting/>
      <Painting/>
    </>
  );
}

export default HomePage;