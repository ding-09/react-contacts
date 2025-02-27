import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useContacts } from '../../providers/ContactsProvider'

// styles
import {
  Form,
  Figure,
  InputContainer,
  InputGroup,
  SubmitBtn,
} from './ContactCreatForm.styled';

const ContactCreateForm = (props) => {
  const contactsContext = useContacts();

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

    // add formValues to current contacts via context
    contactsContext.addContact(formValues)
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Figure>
        <img
          src={
            formValues.profilePic ||
            'https://media.istockphoto.com/vectors/simple-man-head-icon-set-vector-id1196083861?k=20&m=1196083861&s=612x612&w=0&h=XNRxC4ohwTlL7KBis1Dc_MZASQSKfC9IoBfe2Oq9eL0='
          }
          alt='Profile preview.'
        />
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
