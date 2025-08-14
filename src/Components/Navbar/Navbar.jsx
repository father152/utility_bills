import "./navbar.css";
import { Link } from "react-router";
import Gek from "./Gek/Gek";
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  
  const location = useLocation();
  const receivedData = location.state?.data;
  
  return (
    <div className="navbar">
      <h2>Список послуг</h2>

      <div className="navbar__container">
        <div className="navbar__links">
          <ul>
            <Link to="/gek">
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
          <label> Всього до cплати {receivedData}</label>
          
        </div>
      </div>
    </div>
  );
}
