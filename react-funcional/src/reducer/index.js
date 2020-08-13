import React, { useState } from "react";

import useStore from "./somaReducer";

function ReducerHook() {
  const [numero, setNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [store, dispatch] = useStore();

  const somar = () => {
    const numeroInt = parseInt(numero);
    const segNumeroInt = parseInt(segundoNumero);

    dispatch({
      type: "SOMA",
      payload: numeroInt + segNumeroInt,
    });
  };

  const subtrair = () => {
    const numeroInt = parseInt(numero);
    const segNumeroInt = parseInt(segundoNumero);

    dispatch({
      type: "SUBTRACAO",
      payload: numeroInt - segNumeroInt,
    });
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
      <button onClick={subtrair}>Subtrair</button> <br />
      Resultado: <br />
      <input type="text" value={store.resultado} readOnly />
      <br />
    </div>
  );
}

export default ReducerHook;
