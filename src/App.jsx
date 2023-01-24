import html2canvas from "html2canvas";
import { useState } from "react";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setimagen] = useState("");

  const handleline1 = (e) => {
    setLinea1(e.target.value);
  };
  const handleline2 = (e) => {
    setLinea2(e.target.value);
  };
  const handleImg = (e) => {
    setimagen(e.target.value);
  };
  const handleExport = (e) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="titulo">
          <h1>Elije la imagen</h1>
        </div>
        <select onChange={handleImg} className="opciones">
          <option value={"fire"}>Casa en llamas</option>
          <option value={"futurama"}>Futurama</option>
          <option value={"history"}>History</option>
          <option value={"matrix"}>Matrix</option>
          <option value={"philosoraptor"}>Philosoraptor</option>
          <option value={"smart"}>SmartGuy</option>
        </select>
        <div className="imputs">
          <input
            className="input"
            onChange={handleline1}
            type="text"
            placeholder="Linea superior"
          />
          <input
            className="input"
            onChange={handleline2}
            type="text"
            placeholder="Linea inferior"
          />
        </div>

        <div className="meme" id="meme">
          <span className="linea1">{linea1}</span>
          <span className="linea2">{linea2}</span>
          <div className="imagen">
            {imagen ? (
              <img src={"/assets/" + imagen + ".jpg"} alt="" />
            ) : (
              <img src={"/assets/fire.jpg"} alt="" />
            )}
          </div>
        </div>
        <div className="exportar">
          <button onClick={handleExport}>Exportar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
