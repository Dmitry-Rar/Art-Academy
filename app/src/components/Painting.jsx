import "../styles/Painting.css";
import painting_img from "../assets/img/painting.png";

export default function Painting() {
    return (
        <section className="painting">
            <p>Hildegard von Bingen Johann Sebastian Bach</p>
            <h2>Живопись</h2>
            <div className="painting_information">
                <img src={painting_img} alt="painting_img"></img>
                <div>
                    <p>Вдыхайте в холст жизнь, изображая на бумаге всё, что душе будет угодно. В курс включены обучающие уроки для использования масляных, акрильных и акварельных техник.</p>
                    <a href="/">Записаться</a>
                </div>
            </div>
        </section>
    );
}