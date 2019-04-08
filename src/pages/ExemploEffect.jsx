import React, {useState, useEffect} from "react";
import { Button, Container, Form } from "react-bootstrap";

const ExemploEffect = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize());
    }
  }, []);

  useEffect(() => {
    document.title = nome;
  })

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Container title="Class Component">
      <Form>
        <p>{width}</p>
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

export default ExemploEffect;
