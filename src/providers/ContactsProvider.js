import React, { createContext, useContext, useState } from 'react';
import { mockContacts } from '../utils/mockContacts';

const ContactsContext = createContext();

export const ContactsProvider = (props) => {
  const initialContacts = mockContacts;
  const [contacts, setContacts] = useState(initialContacts);

  // add contact
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const value = { contacts, addContact, deleteContact };
  return (
    <ContactsContext.Provider value={value}>
      {props.children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
};
