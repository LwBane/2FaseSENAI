import React, { useState } from "react";
import './Venda523.css'


function Venda523() {
    const[precoVenda, SetPrecoVenda] = useState()

    function calcularVenda(){
          let precoCompra = Number(prompt("Digite o valor do produto:"));
      
          if (precoCompra < 20) {
            SetPrecoVenda(precoCompra * 1.45)
          } else {
            SetPrecoVenda(precoCompra * 1.3)
          }
    }

  return (
    <div className="container-venda523">

        <h2>Exercício 5.23</h2>
        <p>Calcule aqui o valor de venda, coloque o valor do produto ^^</p>
        <button className="calcularVenda" onClick={calcularVenda}>Calcular</button>
        {/* {precoVenda && <p>O valor de venda é de R${precoVenda}</p>} */}


        {precoVenda ?<p>O valor de venda é de R${precoVenda}</p> : <p>Informe o preço de compra</p>} 
        {/* Código acima foi pra resolver o comentado, pois no comentado se você desse um enter, aparecia o número 0 só, como se ele fosse true, mas não aparecia a mensagem prevista */}
      
    </div>

)
}


export default Venda523