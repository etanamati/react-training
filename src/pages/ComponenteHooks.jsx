import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getDadosUsuario } from "../services/Service";

const Hooks = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getDadosUsuario().then(data => {
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
            onChange={e => setFirstName(e.target.value)}
            size="sm"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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

export default Hooks;
