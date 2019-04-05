import React, { useState, useEffect } from "react";

const ExemploHookStateObject = () => {
  const [state, setState] = useState({
    teste: "",
    marcado: true
  });

  useEffect(() => {
    console.log({ state });
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  return (
    <>
      <input name="teste" value={state.teste} onChange={handleChange} />
      {state.marcado && <h1>Marcado</h1>}
      <button
        onClick={() =>
          handleChange({ target: { name: "marcado", value: !state.marcado } })
        }
      >
        Marcar
      </button>
    </>
  );
};

export default ExemploHookStateObject;
