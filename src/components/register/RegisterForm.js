import React from 'react';
import { useForm } from '../../hooks/useForm';

const RegisterForm = (props) => {
  // initialize state with username and password fields
  //   const [formValues, setFormValues] = useState({
  //     username: '',
  //     password: '',
  //   });

  //   const handleInputChange = (event) => {
  //     // setFormValues based on name of input
  //     setFormValues({ ...formValues, [event.target.name]: event.target.value });
  //   };

  // *************************************
  // realized the exact same logi was being applied to
  // both LoginForm.js and RegisterForm.js, so
  // used custom hook useForm to handle form input
  // to reduce repetition

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
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
        <button type='submit'>Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
