import React from "react";
import { Button, Container, Form } from "react-bootstrap";

class ExemploState extends React.Component {
  state = {
    nome: "",
    sobrenome: ""
  };

  render() {
    const { nome, sobrenome } = this.state;

    return (
      <Container title="Class Component">
        <Form>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="nome"
              value={nome}
              onChange={(e) => this.setState({nome: e.target.value})}
              size="sm"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              name="sobrenome"
              value={sobrenome}
              onChange={(e) => this.setState({sobrenome: e.target.value})}
            />
          </Form.Group>
          <Button variant="success" onClick={() => {}}>
            Salvar
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ExemploState;
