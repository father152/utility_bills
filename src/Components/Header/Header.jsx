import "./header.css";
import { Link } from "react-router";
import imageheader from "./pexels-alex-andrews-271121-816622.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={imageheader} alt="pic"></img>
        </Link>
      </div>
      <div className="header__title">
        <ul>
          <Link to="/news">
            <li>Новини</li>
          </Link>
          <Link to="/about">
            <li>Про компанію</li>
          </Link>
          <Link to="/portfolio">
            <li>Портфоліо</li>
          </Link>
          <Link to="/contacts">
            <li>Контакти</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
