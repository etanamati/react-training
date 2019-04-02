import React from "react";
import { Button, Container, Form } from "react-bootstrap";

type State = {
  firstName: string;
  lastName: string;
  email: string;
  [index: string]: string;
};

type Props = {};

class ComponenteClasse extends React.Component<Props, State> {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  componentDidMount() {
    const requestMock: Promise<State> = new Promise<State>(
      (resolve, reject) => {
        resolve({
          firstName: "Nome",
          lastName: "Sobrenome",
          email: "nome.sobrenome@gmail.com"
        });
      }
    );

    requestMock.then(data => this.setState({ ...data }));
  }

  onChange = (event: any) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSave = () => {
    console.log(this.state);
  };

  render() {
    const { firstName, lastName, email } = this.state;

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
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={email} onChange={this.onChange} />
          </Form.Group>
          <Button variant="success" onClick={this.onSave}>
            Salvar
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ComponenteClasse;
