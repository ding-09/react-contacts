import React from 'react';
import { useForm } from '../../hooks/useForm';

// styles
import { Form, Figure, InputContainer, InputGroup, SubmitBtn } from './ContactCreatForm.styled';

const ContactCreateForm = (props) => {
  const [formValues, handleInputChange] = useForm({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    profilePic: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Figure>
        <img src={formValues.profilePic} alt='Profile preview.' />
      </Figure>
      <InputContainer>
        <InputGroup>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <input
            type='tel'
            placeholder='Phone Number'
            name='phoneNumber'
            value={formValues.phoneNumber}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={formValues.email}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <input
            type='text'
            placeholder='Address'
            name='address'
            value={formValues.address}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <input
            type='text'
            placeholder='Profile Picture Url'
            name='profilePic'
            value={formValues.profilePic}
            onChange={handleInputChange}
          />
        </InputGroup>
        <div>
          <SubmitBtn type='submit'>Add Contact</SubmitBtn>
        </div>
      </InputContainer>
    </Form>
  );
};

export default ContactCreateForm;
