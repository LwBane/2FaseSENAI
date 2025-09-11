import React, { useState } from "react";

function Conceito524() {
  const [nota1, setNota1] = useState();
  const [nota2, setNota2] = useState();
  const [media, setMedia] = useState();
  const [conceito, setConceito] = useState();

  function calcularMedia() {
    let nota1 = Number(prompt("Digite a primeira nota: "));
    let nota2 = Number(prompt("Digite a segunda nota: "));

    let media = (nota1 + nota2) / 2;

    let conceito = ""

    if (media >= 9 && media <= 10) {
      conceito = "A"
    } else if (media >= 7.5 && media < 9) {
      conceito = "B"
    } else if (media >= 6 && media < 7.5) {
      conceito = "C";
    } else if (media >= 4 && media < 6) {
      conceito = "D"
    } else if (media >= 0 && media < 4) {
      conceito = "E";
    } else {
      console.log("Nota inválida!");
    }

        setNota1(nota1);
        setNota2(nota2);
        setMedia(media);
        setConceito(conceito);
    
    }

    return (
      <div className="container-conceito524">
        <h2>Exercício 5.24</h2>
        <p>Veja aqui o conceito de sua média</p>
        <button className="calcularMedia" onClick={calcularMedia}>
          Calcular
        </button>

        {nota1 ? <p>Sua nota 1: {nota1}</p> : <p>Informe sua primeira nota</p>}

        {nota2 ? <p>Sua nota 2: {nota2}</p> : <p>Informe sua segunda nota</p>}

        {media ? <p>Sua média: {media}</p> : <p>Informe novamente suas notas</p>}

        {conceito ? <p>Seu conceito: {conceito}</p> : <p>Informe novamente suas notas</p>}
      </div>
    );
  }

  export default Conceito524;
