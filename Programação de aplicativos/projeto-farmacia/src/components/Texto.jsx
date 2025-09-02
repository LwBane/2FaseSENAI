import "./Texto.css";

function Texto(props) {
  return (
    <div className="texto-container">
      <p>{props.texto}</p>

      {console.log(props)}
    </div>
  );
}

export default Texto;
