import { useState } from "react";
import "./Demo.css"

function Demo() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function fazerLogin() {
    alert("Nome: " +  inputUsername + "\nSenha: " + inputPassword);
  }
  return (
    <div className='demo-container'>
      <h2>Demo</h2>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)} // e = event // --> quando eu coloco algo la no input, ele aciona o event, e dai ele pega o valor, extraiu o target, e joga o valor dele no setInput (? eu acho q é isso)
      />

      <label htmlFor="">Password</label>
      <input
        type="password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      ></input>

      <button onClick={fazerLogin}>Login</button>
    </div>
  );
}

export default Demo;
