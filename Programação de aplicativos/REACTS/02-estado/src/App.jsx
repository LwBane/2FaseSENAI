import { useState } from "react";
import "./App.css";
import Venda523 from "./components/Venda523";

function App() {
  // lembrete: Não usar variável (ex: let --) aqui
  const [numero, setNumero] = useState(0); //Estado: numero ; Função que vai acompanhar: setNumero
  const [username, setUsername] = useState();

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    setNumero(numero - 1);
  }

  function logar() {
    let nome = prompt("Digite seu nome: ");
    setUsername(nome);
  }


  return (
    <>
      {/* {username && <p>render condicional</p>} */}

      {username && <p className="user">Olá, {username}</p>}
      <button onClick={logar}>Logar</button>
      <h1>Estados</h1>
      <button onClick={decrementar}>-</button>
      {numero}
      <button onClick={incrementar}>+</button>

      <Venda523 />
    </>
  );
}


export default App;
