import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import { Row, Container, Form, Button } from "react-bootstrap";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

type State = {
  firstName: string;
  lastName: string;
  email: string;
};

const ValidationSchemaExample = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setFirstName("Elton");
    setLastName("Tanamati");
    setEmail("elton.tanamati@email.com.br");
  }, []);

  const onSubmitForm = (values: State) => {
    console.log({ values });
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          email: email
        }}
        validationSchema={() => SignupSchema}
        onSubmit={onSubmitForm}
        render={({ errors, touched, submitForm }) => (
          <Container>
            <Form>
              <Row>
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </Row>
              <Row>
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </Row>
              <Row>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Row>

              <Button variant="success" onClick={submitForm}>
                Login
              </Button>
            </Form>
          </Container>
        )}
      />
    </div>
  );
};

export default ValidationSchemaExample;
