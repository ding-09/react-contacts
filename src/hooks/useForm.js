import { useState } from 'react';

export const useForm = (values) => {
  // initialize state with username and password fields
  const [formValues, setFormValues] = useState(values);

  // handle input change based on input name of the event
  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  // return form values and handlInputChange function
  return [formValues, handleInputChange];
};
