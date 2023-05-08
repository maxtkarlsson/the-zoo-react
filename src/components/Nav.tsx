import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  return (
    <nav className="nav-container">
      <p className="logo">TheZoo</p>
      <ul className="nav">
        <li className="nav__item">
          <Link to="/">Start</Link>
        </li>
        <li className="nav__item">
          <Link to="/animals">Djur</Link>
        </li>
      </ul>
    </nav>
  );
};
