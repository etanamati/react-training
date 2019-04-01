import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import { Row } from "react-bootstrap";
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
  });

  const onSubmitForm = (values: State) => {
    console.log({ values });
  };

  return (
    <div>
      <h1>Signup</h1>
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
          <div>
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
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </Row>
            <button onClick={submitForm} type="submit">
              Submit
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default ValidationSchemaExample;
