import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../providers/AuthProvider';

const LoginForm = (props) => {
  // initialize state with username and password fields
  // const [formValues, setFormValues] = useState({
  //   username: '',
  //   password: '',
  // });

  // const handleInputChange = (event) => {
  //   // setFormValues based on name of input
  //   setFormValues({ ...formValues, [event.target.name]: event.target.value });
  // };

  // *************************************
  // realized the exact same logic was being applied to
  // both LoginForm.js and RegisterForm.js, so
  // used custom hook useForm to handle form input
  // to reduce repetition
  const authContext = useAuth();

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    authContext.login(formValues.username, formValues.password);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          value={formValues.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          value={formValues.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
