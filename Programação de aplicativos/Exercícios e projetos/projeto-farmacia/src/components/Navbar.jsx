import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <a href="" className="navbar-logo">
        <img src="./imagens/farmarcia-logo.png" alt="Logo Farmárcia" />
      </a>

      <div className="navbar-menu">
        <a href="">
          <img src="./imagens/home.svg" alt="" />
          Home
        </a>

        <a href="">
          <img src="./imagens/telefone2.svg" alt="" />
          Contato
        </a>

        <a href="">
          <img src="./imagens/dashboard.svg" alt="" />
          DashBoard
        </a>
      </div>
    </div>
  );
}

export default Navbar;
