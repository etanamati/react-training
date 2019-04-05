import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getDadosUsuario } from "../services/Service";

const Hooks = () => {
  const nome = useFormInput("Nome");
  const sobrenome = useFormInput("Sobrenome");
  const email = useFormInput("nome.sobrenome@teste.com");

  useEffect(() => {
    console.log("Executa a cada render");
  });

  useDidMount(() => {
    getDadosUsuario().then(data => {
      nome.setValue(data.nome);
      sobrenome.setValue(data.sobrenome);
      email.setValue(data.email);
    });
  });

  return (
    <Container title="Hooks">
      <Form>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control {...nome} size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control {...sobrenome} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control {...email} />
        </Form.Group>
        <Button
          variant="success"
          onClick={() => console.log({ nome, sobrenome, email })}
        >
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

function useDidMount(callBack) {
  useEffect(callBack, []);
}

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
