import React from 'react';
import { useForm } from '../../hooks/useForm';

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
    <form onSubmit={handleFormSubmit}>
      <div>
        <img src={formValues.profilePic} alt='Profile preview.' />
      </div>
      <div>
        <div>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type='tel'
            placeholder='Phone Number'
            name='phoneNumber'
            value={formValues.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Address'
            name='address'
            value={formValues.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Profile Picture Url'
            name='profilePic'
            value={formValues.profilePic}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type='submit'>Add Contact</button>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateForm;
