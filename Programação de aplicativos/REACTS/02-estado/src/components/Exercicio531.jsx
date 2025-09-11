import React, { useState } from "react";

function Garcom(){
    function calcularEmprestimo(){
        const salario = Number(prompt("Salário: "))
        const emprestimo = Number(prompt("Empréstimo: "))
        const prestacoes = Number(prompt("Numéro de prestações: "))
        const valorPrestacao = emprestimo / prestacoes 

        if(valorPrestacao <= salario*0.3){

        }
    }
}

//n ta finalizado