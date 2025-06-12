import "./navbar.css";
import { Link } from "react-router";


export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Список послуг</h2>

      <div className="navbar__container">
        <div className="navbar__links">
          <ul>
            <Link to="/kvartplata">
              <li>Послуги ЖЕУ</li>
            </Link>
            <Link to="/elektr">
              <li>Електроенергія</li>
            </Link>
            <Link to="/water">
              <li>Водопостачання та водовідведення</li>
            </Link>
            <Link to="/hotwater">
              <li>Гаряче водопостачання</li>
            </Link>
            <Link to="/teplo">
              <li>Опалення</li>
            </Link>
            <Link to="/gas">
              <li>Газопостачання</li>
            </Link>
            <Link to="/">
              <li>Вивіз сміття</li>
            </Link>
            <Link to="/rospodil">
              <li>Розподіл газу</li>
            </Link>
          </ul>
        </div>
        <div className="summary">
          <label> Всього до оплати</label>
          <input
            className="volume"
            id="summary"
            type="number"
            readOnly
          ></input>{" "}
        </div>
      </div>
    </div>
  );
}
