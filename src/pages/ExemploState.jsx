import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";

const ExemploState = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  
  return (
    <Container title="Class Component">
      <Form>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            size="sm"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            name="sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" onClick={() => {}}>
          Salvar
        </Button>
      </Form>
    </Container>
  );
}

export default ExemploState;
