// 1. Crie um programa que permita ao usuário escolher entre três tamanhos de pizza (pequeno, médio e grande) e, com base na escolha, exiba o preço correspondente.

function pizza(){
let tamanho = prompt("Escolha o tamanho da pizza: pequeno, médio ou grande");
let preco;

if (tamanho === "pequeno") {
    preco = 2;
} else if (tamanho === "médio") {
    preco = 50;
} else if (tamanho === "grande") {
    preco = 10000;
} else {
    preco = "Opção inválida, escolhe certo";
}

alert("Preço: " + preco);

}

// 2. Crie um aplicativo de conversão de moedas que permita ao usuário escolher entre três moedas (dólar, euro e real) e, com base na escolha, converta um valor de uma moeda para outra.

function conversao(){

let moeda = prompt("Converter para qual moeda? (dólar, euro, real)");
let valor = Number(prompt("Digite o valor em reais:"));
let convertido;

if (moeda === "dólar") {
  convertido = (valor / 5).toFixed(2); 
} else if (moeda === "euro") {
  convertido = (valor / 6).toFixed(2);
} else if (moeda === "real") {
  convertido = valor.toFixed(2);
} else {
  convertido = "Moeda inválida!";
}

alert("Resultado da conversão: " + convertido + " " + moeda);

}

// 3. Crie um programa que ajude um usuário a escolher roupas com base na temperatura atual.O usuário informa a temperatura e o programa sugere roupas apropriadas(casaco pesado, camiseta, shorts, etc.).

function roupas(){

let temp = Number(prompt("Qual a temperatura atual em °C?"));

if (temp < 10) {
  alert("Tá frioo demais, não sai de casa sem esse casaco");
} else if (temp < 20) {
  alert("Depende de você, mas levar um casaco é sempre bom");
} else if (temp < 30) {
  alert("Tá suave, só se tu for MUITO friorento pra não usar camiseta");
} else {
  alert("Tá doido, melhor nem sair de casa se não quiser derreter");
}

}

// 4. Desenvolva um sistema de reserva de quartos de hotel, onde o usuário escolhe o tipo de quarto(simples, duplo, suíte) e o programa verifica a disponibilidade e o preço.

function hotel(){

let tipo = prompt("Escolha o quarto: simples, duplo ou suíte");
let preco, disponibilidade = true;

if (tipo === "simples") {
  preco = 100;
} else if (tipo === "duplo") {
  preco = 180;
} else if (tipo === "suíte") {
  preco = 300;
} else {
  disponibilidade = false;
}

if (disponibilidade) {
  alert("Quarto disponível! Preço: R$ " + preco);
} else {
  alert("Opção inválida ou quarto indisponível.");
}

}

// 5. Crie um programa que ajude um usuário a escolher um meio de transporte com base na distância que deseja percorrer(ônibus, metrô, táxi, avião, navio…) e calcule o tempo estimado de viagem.Aqui te dou liberdade para criar suas próprias regras. 

function transporte(){
    let distancia = Number(prompt("Qual a distância da viagem (em km)?"));
let transporte, tempo;

if (distancia < 5) {
  transporte = "Vai apé preguiçoso";
  tempo = distancia * 12 + " minutos";
} else if (distancia < 20) {
  transporte = "pega o busão";
  tempo = (distancia / 40).toFixed(1) + " horas";
} else if (distancia < 200) {
  transporte = "carro";
  tempo = (distancia / 80).toFixed(1) + " horas";
} else if (distancia < 2000) {
  transporte = "só ir voando mesmo";
  tempo = (distancia / 800).toFixed(1) + " horas";
} else {
  transporte = "navio";
  tempo = (distancia / 30).toFixed(1) + " horas";
}

alert("Melhor transporte: " + transporte + "\nTempo estimado: " + tempo);
}

// 6. Faça um aplicativo de previsão do tempo que permite ao usuário inserir o nome de uma cidade e, com base na cidade escolhida, fornece a previsão do tempo atual.

function previsao(){

let cidade = prompt("Digite o nome da cidade: \nSão Paulo, Rio de Janeiro ou Curitiba");
let previsao;

if (cidade === "São Paulo") {
  previsao = "Nublado com chance de chuva";
} else if (cidade === "Rio de Janeiro") {
  previsao = "Ensolarado e calor";
} else if (cidade === "Curitiba") {
  previsao = "Chuva e frio";
} else {
  previsao = "Digita uma das cidades que foram dadas como opção por gentileza...";
}

alert("Previsão para " + cidade + ": " + previsao);

}