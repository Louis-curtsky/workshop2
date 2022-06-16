import axios from 'axios';
import { Formik, useField } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import {Button, Form} from "react-bootstrap";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
 
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </>
  );
};

export const SubmitPerson = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          title: ''
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(80, 'Must be 80 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(80, 'Must be 80 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required')
        })}

        onSubmit={async values => {
          return await axios.post('https://localhost:44342/People', values).then(res => res);
        }}
      >
        <Form>
          <h3> </h3>
          <MyTextInput label='First Name' name='firstName' type='text' placeholder='Jane' />{'  '}
          <MyTextInput label='Last Name' name='lastName' type='text' placeholder='doe' />{'  '}
          <MyTextInput
            label='E-mail'
            name='email'
            type='email'
            placeholder='JennyHowe@yahoo.com'
            />{'  '}
          <MyTextInput label='Title' name='title' type='text' placeholder='Developer' />{'  '}
          <Button 
          type='submit' 
          content = 'Submit'
          onClick={SubmitPerson}
          variant="secondary"
          >Submit</Button>
        </Form>
      </Formik>
    </>
  );
};