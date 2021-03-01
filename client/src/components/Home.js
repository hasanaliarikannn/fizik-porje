import React from "react";
import "../App.css";
import Image from "../asset/images/ImageBack.png";

function Home() {
  return (
    <div>
      <section>
        <h1 className="big-text">
          Fizik dersini seven bir ekip tarafından hazırlanan içerik sayesinde
          sınavlarda fark yaratmayı hedefleyenler için, özenle üretilmiştir.
        </h1>

        <p className="low-text">
          Yüzlerce soru ve deneme sınavlarıyla sizi her geçen gün hedefinize
          biraz daha yaklaştırır!
        </p>
        <a className="big-btn" href="/egitim">
          Başla
        </a>

        <div className="homeimage">
          <img src={Image} />
        </div>
      </section>
    </div>
  );
}

export default Home;
