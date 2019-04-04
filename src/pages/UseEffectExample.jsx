import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Quantidade clicks ${count}`;
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(prevValue => prevValue + 1)}>
        Contador
      </button>
    </div>
  );
};

export default UseEffectExample;
