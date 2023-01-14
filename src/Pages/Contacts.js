import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BottomAppBar from '../Components/AppBar/AppBar';
import { getContacts, getSearchName } from '../redux/contacts/selectors';
import { getIsLogin, getUser } from '../redux/auth/selectors';
import BasicModal from '../features/Modal';
import { deleteContact } from '../redux/contacts/operations';

export default function Contacts() {
  const isLogin = useSelector(getIsLogin);
  const contactList = useSelector(getContacts);
  const search = useSelector(getSearchName);
  const { name } = useSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isLogin) {
      navigate('/', { replace: true });
    }
  }, [isLogin, navigate]);

  const filtredList = contactList.items.filter(contact =>
    contact.name.toLowerCase().includes(search)
  );

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Paper square sx={{ pb: "50px" }}> */}
      <ListSubheader sx={{ bgcolor: 'background.paper' }}>
        {`${name}'s phone book`}
      </ListSubheader>
      <List sx={{ mb: 2 }}>
        {filtredList.map(({ id, name, number }) => (
          <React.Fragment key={id}>
            <ListItem>
              <ListItemAvatar>
                {/* <Avatar alt="Profile Picture" src={person} /> */}
                <button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  x
                </button>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={number} />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
      {/* </Paper> */}
      <BottomAppBar />
      <BasicModal />
    </React.Fragment>
  );
}
