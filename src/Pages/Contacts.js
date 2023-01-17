import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { useDispatch, useSelector } from 'react-redux';

import BottomAppBar from '../Components/AppBar/AppBar';
import {
  getContacts,
  getSearchName,
} from '../redux/contacts/selectors';
import { getUser } from '../redux/auth/selectors';
import BasicModal from '../features/Modal';
import {
  fetchContacts,
} from '../redux/contacts/operations';
import { Contact } from 'Components/Contact/Contact';



export default function Contacts() {

  const contactList = useSelector(getContacts);
  const search = useSelector(getSearchName);
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const firstName = name?.toString().toUpperCase();

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredList = contactList.items?.filter(contact =>
    contact.name.toLowerCase().includes(search)
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <ListSubheader
        sx={{ bgcolor: '#6495ED', color: 'white', fontSize: '16px' }}
      >
        {`${firstName}'s phone book`}
      </ListSubheader>
      <List sx={{ mb: 2 }}>
        {filtredList?.map(contact => (
          <Contact
            key={contact.id}
            primary={contact.name}
            secondary={contact.number}
            contact={contact}
          />
        ))}
      </List>
      <BottomAppBar />
      <BasicModal />
    </React.Fragment>
  );
}
