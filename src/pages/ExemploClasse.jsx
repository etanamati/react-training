import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getDadosUsuario } from "../services/Service";

class ExemploClasse extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  componentDidMount() {
    getDadosUsuario().then(data => this.setState({ ...data }));
  }

  onChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSave = () => {
    console.log(this.state);
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <Container title="Class Component">
        <Form>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="firstName"
              value={firstName}
              onChange={this.onChange}
              size="sm"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              name="lastName"
              value={lastName}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="success" onClick={this.onSave}>
            Salvar
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ExemploClasse;
