import "../styles/Shapka.css";
import shapka_logo from "../assets/img/shapka_logo.png";
import angel from "../assets/img/angel.png";

export default function Header() {
  return (
    <section className="shapka">
      <div className="shapka-left">
        <img src={shapka_logo} alt="shapka-logo"></img>
        <p>
          “Искусство смывает с души пыль повседневной жизни”. –
          <p id="Pablo"> Пабло Пикассо</p>
        </p>
        <a href="/">Выбрать курс</a>
      </div>
      <div id="angel">
        <img src={angel} alt="angel"></img>
      </div>
    </section>
  );
}
