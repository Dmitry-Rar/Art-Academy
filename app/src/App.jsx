import "./styles/App.css";
import Header from "./components/Header.jsx";
import Shapka from "./components/Shapka.jsx";
import About_Academy from "./components/About_Academy.jsx";
import Music from "./components/Music.jsx";
import Acting from "./components/Acting.jsx";
import Painting from "./components/Painting.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shapka></Shapka>
      <About_Academy></About_Academy>
      <Music></Music>
      <Acting></Acting>
      <Painting></Painting>
      <Footer></Footer>
    </div>
  );
}

export default App;
