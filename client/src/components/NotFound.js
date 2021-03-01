import "./Notfound.css";
import { Link } from "react-router-dom";
import İmage from '../asset/images/notfound.png'
const NotFound = () => {
  return (
    <div>
      <div className="notfound">
        <div className="notfound-text">
          <a className="notfound-error">SAYFA BULANAMADI !</a>
          <h1 className="notfound-error-2">OLAMAZ ! Hata </h1>
          <h1 className="notfound-error-3">Bu sayfa ulaşılamıyor .</h1>
        </div>
      </div>
      <div className="notfound-button">
<a className="notfount-button_1" href="/">
          GERİ DÖN
        </a>
        <a className="text-2_notfound" href="/help">YARDIM AL </a>
        </div>   

        <div className="notfound-image">
          <img src={İmage} />
        </div>
    </div>
  );
};
export default NotFound;
