import React from 'react';
import { Formik, Form, Field } from 'formik';

import StyledMyForm from './StyledMyForm';
import { CustomInputMyForm } from './CustomInputMyForm';
import { Button } from '../../Button';

interface MyFormProps {
  type: string,
};

export const MyForm = ({
  type = "in"
}: MyFormProps) => {
  return (
    <StyledMyForm>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {}}
      >
        {(formik) => {
          return (
          <Form
            className={`form ${type}`}
          >
            <Field
              name="email"
              component={CustomInputMyForm}
              placeholder="E-mail"
            />
            <Field
              name="password"
              component={CustomInputMyForm}
              placeholder="Password"
            />
            <Button 
              classBtn='primary'
            >
              Sign Up
            </Button>
          </Form>
          )
        }}

      </Formik>
    </StyledMyForm>
  );
};