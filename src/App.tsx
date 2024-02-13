import { useState } from "react";
import "./App.css";

const frases = [
  "NO",
  "Segura?",
  "Muy segura??",
  "Muy muy segura???",
  "Segurisima????",
  "Por favorrr",
  "Te lo ruego",
  "Te lo suplico",
  "Me arrodillo",
  "Te estas ganando el bloq!!",
  "Bueno, la ultima",
  "Mentira",
  "Vas a tener que decir que si igual!!!",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return frases[Math.min(noCount, frases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="ositos"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="texto">
            {" "}
            Te quiero muchisisisisisimoo alberrrrrrrr
          </div>
        </>
      ) : (
        <>
          <img
            alt="ositos2"
            src="https://media.tenor.com/6eIkl-Qc62EAAAAi/cute.gif"
          />

          <div className="texto-valentin">
            Alber, queres pasar San Valentín y el resto de los días
            conmigo!?!?!?!{" "}
          </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              SI
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
