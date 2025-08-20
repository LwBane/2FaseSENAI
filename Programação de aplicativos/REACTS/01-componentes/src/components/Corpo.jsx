import './Corpo.css'
import Texto from './Texto'
import Textao from './Textao'
import Titulo1 from './Titulo1'
import Titulo2 from './Titulo2'

function Corpo() {

  function login(){
    alert("Logado com sucesso!")
    let usuario = prompt("Digite seu nome de usuário")
    if(usuario == "admON"){
      alert("Logado com sucesso, seja bem-vindo ADM")
    }else{
      alert("Sai fora, você não é o adm")
    }
  }

  return (
    <div className="corpo-container">
      <Titulo1 />
      <Titulo2 texto={"Primeiro pedaço de página"} emoji={"😘👌"} />
      <Texto texto={"Testando rs"}/>

      <Titulo2 texto={"Segundo pedação de página"} />
      <Textao texto={"lorem"}/>

      <img src="./imagens/batman.jpeg" alt="Imagem 1 (Batman)" className='imagem-corpo' />

      <button onClick={login}>Login</button>

    </div>
  )
}

export default Corpo
