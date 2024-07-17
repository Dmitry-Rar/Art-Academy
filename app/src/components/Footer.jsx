import "../styles/Footer.css";
import footer_logo from "../assets/img/footer_logo.png";

export default function Footer() {
    return (
        <section className="footer">
            <img src={footer_logo} alt="footer_logo"></img>
        </section>
    );
}