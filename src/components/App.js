import React from 'react';
import LoginPage from './login';
import RegisterPage from './register';
import ContactsPage from './contacts';
import ContactDetailsPage from './contact-details';
import ContactCreatePage from './contact-create';
import { ContactsProvider } from '../providers/ContactsProvider'



const App = () => {
  // const [contacts, setContacts] = useState([]);

  // const [contacts, setContacts] = useFetchContacts();
  

  return (
    <ContactsProvider>
      <LoginPage />
      <RegisterPage />
      <ContactsPage />
      <ContactDetailsPage />
      <ContactCreatePage/>
    </ContactsProvider>
  );
};

export default App;
