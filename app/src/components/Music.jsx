import "../styles/Music.css";
import music_img from "../assets/img/music.png";

export default function Music() {
  return (
    <section className="Music">
      <p>Hildegard von Bingen Johann Sebastian Bach</p>
      <h2>Музыка</h2>
      <div className="music_information">
        <img src={music_img} alt="music_img"></img>
        <div>
          <p>Вместе с нами вы научитесь распозновать составные части классических композиций и создавать собственные произведения на клавишных инструментах.</p>
          <a href="/">Записаться</a>
        </div>
      </div>
    </section>
  );
} 