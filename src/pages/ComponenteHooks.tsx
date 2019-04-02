import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";

type State = {
  firstName: string;
  lastName: string;
  email: string;
  [index: string]: string;
};

type Props = {};

const ComponenteHooks = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const requestMock: Promise<State> = new Promise<State>(
      (resolve, reject) => {
        resolve({
          firstName: "Nome",
          lastName: "Sobrenome",
          email: "nome.sobrenome@gmail.com"
        });
      }
    );
    requestMock.then(data => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
    });
  }, []);

  return (
    <Container title="Hooks">
      <Form>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="firstName"
            value={firstName}
            onChange={(e: any) => setFirstName(e.target.value)}
            size="sm"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            name="lastName"
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="success"
          onClick={() => console.log({ firstName, lastName, email })}
        >
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default ComponenteHooks;
