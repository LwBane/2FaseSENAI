import { Link } from "react-router-dom";
import "./Navbar.css";
import Titulo from "./Titulo";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="" className="navbar-logo">
        <img src="./imagens/logo.png" alt="Logo" />
      </a>

      <div className="navbar-menu">
        <Link to="/">Homes</Link>
        <Link to="/bar">Bar</Link>
        <Link to="/sorveteria">Sorveteria</Link>
        <Link to="/borracharia">Borracharia</Link>
      </div>
    </nav>
  );
}

export default Navbar;
