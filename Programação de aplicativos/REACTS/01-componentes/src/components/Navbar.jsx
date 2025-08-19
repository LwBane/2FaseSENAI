import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <a href="">
        <img src="./imagens/home.svg" alt=""/>
        Home
      </a>

      <a href="">
        <img src="./imagens/telefone2.svg" alt=""/>
        Contato
      </a>

      <a href="">
        <img src="./imagens/dashboard.svg" alt =""/>
        DashBoard
      </a>
    </div>
  );
}

export default Navbar