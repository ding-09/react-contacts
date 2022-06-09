import React from 'react';
import LoginPage from './login';
import RegisterPage from './register';
import ContactsPage from './contacts';
import ContactDetailsPage from './contact-details';
import ContactCreatePage from './contact-create';
import { getContacts } from '../utils/contacts';
import { useFetchContacts } from '../hooks/useFetchContacts'



const App = () => {
  // const [contacts, setContacts] = useState([]);

  const [contacts] = useFetchContacts();

  return (
    <div>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <ContactsPage contacts={contacts} /> */}
      {/* <ContactDetailsPage contact={contacts[0]} /> */}
      <ContactCreatePage />
    </div>
  );
};

export default App;
