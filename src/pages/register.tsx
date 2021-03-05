import React from 'react';
import {Formik, Form} from 'formik';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {

}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({values, handleChange}) => (
          <Form>
            <InputField 
              name="username"
              placeholder="username"
              label="Username"
            />
            <InputField 
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Register;