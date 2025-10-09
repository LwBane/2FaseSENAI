import "./Titulo.css";

function Titulo(props) {
  return (
    <div className="titulo-container">
      <h2>{props.texto}</h2>
    </div>
  );
}

export default Titulo;
