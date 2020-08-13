import React, { useState } from "react";

function useState() {
  const [numero, setNumero] = useState(0);
  const [segundoNumero, setSegundoNumero] = useState(0);
  const [resultado, setResultado] = useState(0);

  const somar = () => {
    const numeroInt = parseInt(numero);
    const segNumeroInt = parseInt(segundoNumero);

    setResultado(numeroInt + segNumeroInt);
  };

  return (
    <div>
      Num 1: <br />
      <input
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <br />
      Num 2: <br />
      <input
        type="text"
        value={segundoNumero}
        onChange={(e) => setSegundoNumero(e.target.value)}
      />
      <br />
      <button onClick={somar}>Somar</button> <br />
      Resultado: <br />
      <input type="text" value={resultado} />
      <br />
    </div>
  );
}

export default useState;
