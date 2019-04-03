import React, {useState} from 'react';

const UseStateExample = () => {
  const [nome, setNome] = useState('Teste');

  const handleChange = event => {
    setNome(event.target.value);
  }

  return (
    <div>
      <input name="nome" value={nome} onChange={handleChange} />
    </div>
  );
}

export default UseStateExample;