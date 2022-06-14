import React from 'react';
import LoginPage from './login';
import RegisterPage from './register';
import ContactsPage from './contacts';
import ContactDetailsPage from './contact-details';
import ContactCreatePage from './contact-create';
import { ContactsProvider } from '../providers/ContactsProvider';
import { useAuth } from '../providers/AuthProvider';

const App = () => {
  // const [contacts, setContacts] = useState([]);

  // const [contacts, setContacts] = useFetchContacts();

  const authContext = useAuth();

  return (
    <>
      {authContext.loggedIn ?? <LoginPage />}
      {/* <RegisterPage /> */}
      {authContext.loggedIn && (
        <ContactsProvider>
          <ContactsPage />
          {/* <ContactDetailsPage /> */}
          <ContactCreatePage />
        </ContactsProvider>
      )}
    </>
  );
};

export default App;
