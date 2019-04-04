import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getDadosUsuario } from "../services/Service";

const Hooks = () => {
  const firstName = useFormInput("Nome");
  const lastName = useFormInput("Sobrenome");
  const email = useFormInput("nome.sobrenome@teste.com");

  useEffect(() => {});

  useEffect(() => {
    getDadosUsuario().then(data => {
      firstName.setValue(data.firstName);
      lastName.setValue(data.lastName);
      email.setValue(data.email);
    });
  }, []);

  return (
    <Container title="Hooks">
      <Form>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control {...firstName} size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control {...lastName} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control {...email} />
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

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSetValue(value) {
    setValue(value);
  }

  return {
    value,
    onChange: handleChange,
    setValue: handleSetValue
  };
}
export default Hooks;
