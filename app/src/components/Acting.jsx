import "../styles/Acting.css";
import acting_img from "../assets/img/acting.png";

export default function Acting() {
    return (
        <section className="acting">
            <p>Hildegard von Bingen Johann Sebastian Bach</p>
            <h2>Актёрское мастерство</h2>
            <div className="acting_information">
            <img src={acting_img} alt="acting_img"></img>
                <div>
                    <p>Актёрское мастерство позволит вовлечь любого человека в историю, которую вы пытаетесь ему поведать, так, будто бы это реальность.</p>
                    <a href="/">Записаться</a>
                </div>
            </div>
        </section>
    );
}