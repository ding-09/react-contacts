import { useEffect, useState } from 'react';
import { mockContacts } from '../utils/mockContacts'

export const useFetchContacts = () => {
    // initialize contacts state with empty []
    const [contacts, setContacts] = useState([])

    // on component mount / page render, 
    // setContacts with mockContacts derived from utils
    useEffect(() => {
        setContacts(mockContacts)
    }, [])

    // return contacts from this custom hook 
    // holds whatever information mockContacts holds
    return [contacts];
}