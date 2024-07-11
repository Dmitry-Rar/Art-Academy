import "../styles/Header.css";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="header-logo"></img>
      <ul>
        <li>
          <a href="/">О нас</a>
        </li>
        <li>
          <a href="/">Курсы</a>
        </li>
        <li>
          <a href="/">Контакты</a>
        </li>
      </ul>
    </header>
  );
}
