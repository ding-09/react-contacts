import { useEffect, useState } from 'react';
import { mockContacts } from '../utils/mockContacts';
import { getContacts } from '../utils/contacts';

export const useFetchContacts = () => {
  // initialize contacts state with empty []
  const [contacts, setContacts] = useState([]);

  // on component mount / page render,
  // setContacts with mockContacts derived from utils
  useEffect(() => {
    // get contacts from localStorage
    const storedContacts = getContacts();

    // merge mockContacts and storedContacts
    // into one state
    setContacts([...mockContacts, ...storedContacts]);

  }, []);

  // return contacts from this custom hook
  // holds information from
  // mockContacts and storedContacts combined
  return [contacts];
};
