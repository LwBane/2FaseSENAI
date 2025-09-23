import "./Corpo.css";
import Titulo from "./Titulo";
import Texto from "./Texto";

function Corpo() {
  return (
    <div className="corpo-container">
      <Titulo texto={"Um novo começo"} />
      <Texto
        texto={
          "Olá amigos e vizinhos! É com imenso prazer que anunciamos uma nova fase para nossa querida farmácia do bairro! Após anos servindo nossa comunidade, o tio Mário decidiu seguir novos rumos empresariais (agora investindo no promissor mercado de armários aéreos com a Air Mário Armários Aéreos), e eu tive a honra de dar continuidade ao legado farmacêutico que tanto vocês conhecem e confiam."
        }
      />

      <Titulo texto={"O que mudou?"} />
      <Texto
        texto={
          "Nossa farmácia passou por uma completa transformação! Com um visual renovado, nova identidade e a mesma dedicação de sempre ao cuidado com sua saúde e bem-estar. Mantemos o compromisso de ser seu ponto de confiança para medicamentos, orientações farmacêuticas e produtos de saúde."
        }
      />

      <img
        src="./imagens/farmacia-logogrande.png"
        alt="Imagem logo"
        className="imagem-corpo"
      />

      <Titulo texto={"Você está convidado para nossa inauguração em breve!"} />
      <Texto
        texto={
          "Prepare-se para uma festa especial onde celebraremos juntos essa nova jornada. Haverá:"
        }
      />
      <Texto texto={"🎁 Brindes especiais para os primeiros visitantes"} />
      <Texto texto={"💊 Descontos exclusivos em diversos produtos"} />
      <Texto texto={"☕ Coffee break com deliciosos quitutes"} />
      <Texto texto={"🏆 Sorteios incríveis ao longo do dia"} />
      <Texto texto={"👩‍⚕️ Orientações farmacêuticas gratuitas"} />

      <Titulo texto={"Veja um pouco das nossas novidades!"} />

      <div className="container-novidades">
        <img
          src="./imagens/farmarcia-cartoes.png"
          alt="Imagem cartões"
          className="imagem-novidades"
        />

        <img
          src="./imagens/farmarcia-camisetas.png"
          alt="Imagem camisetas"
          className="imagem-novidades"
        />

        <img
          src="./imagens/farmarcia-camiseta.png"
          alt="Imagem camisa"
          className="imagem-novidades"
        />
      </div>
    </div>
  );
}

export default Corpo;
