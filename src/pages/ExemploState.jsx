import React from "react";
import { Button, Container, Form } from "react-bootstrap";

class ExemploState extends React.Component {
  state = {
    nome: "",
    sobrenome: ""
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
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
              onChange={this.onChange}
              size="sm"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              name="sobrenome"
              value={sobrenome}
              onChange={this.onChange}
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
