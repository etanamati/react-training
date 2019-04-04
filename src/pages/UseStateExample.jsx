import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

const UseStateExample = () => {
  const [state, setState] = useState({ nome: "", sobrenome: "" });

  const handleChange = event => {
    const { name, value } = event.target;

    setState({ [name]: value });
  };

  return (
    <Container>
      <Row>
        <input name="nome" value={state.nome} onChange={handleChange} />
      </Row>
      <Row>
        <input
          name="sobrenome"
          value={state.sobrenome}
          onChange={handleChange}
        />
      </Row>
    </Container>
  );
};

export default UseStateExample;
