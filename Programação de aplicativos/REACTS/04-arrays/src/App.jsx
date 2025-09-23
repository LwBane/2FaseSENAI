import { useState } from "react";
import "./App.css";

function App() {
  const [pessoas, setPessoas] = useState([
    { id: 1, nome: "José Marcos", idade: 82 },
    { id: 2, nome: "Maria Julia", idade: 60 },
    { id: 3, nome: "Tarsila Lima", idade: 74 },
    { id: 4, nome: "Mathias", idade: 82 },
    { id: 5, nome: "Luiza", idade: 60 },
    { id: 6, nome: "Jurema", idade: 74 },
  ]);

  function cadastrar() {
    let pessoa = {
      id: Date.now(),
      nome: prompt("Nome: "), 
      idade: Number(prompt("Idade: ")),
    };
    console.log(pessoa, ...pessoas); // ... (operador de espalhamento)

    // pessoas.push(pessoa) --> Nunca faça isso com um useState

    setPessoas([pessoa, ...pessoas]);
  }

  return (
    <div>
      <h1>Arrays</h1>
      <div className="formCadastro">
          <input type="text" />
          <input type="text" />
      </div>
      <button onClick={cadastrar}>Cadastrar</button>
      <div className="container-cards">
        {pessoas.map((pessoa) => (
          <div key={pessoa.id} className="card-pessoa">
            <h2>{pessoa.nome}</h2>
            <p>Idade: {pessoa.idade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
