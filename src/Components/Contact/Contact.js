import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import { deleteContact } from '../../redux/contacts/operations';
import { edit } from 'redux/contacts/phonebookSlice';

export const Contact = ({ primary, secondary, contact }) => {
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await dispatch(deleteContact(contact.id));
    setLoading(false);
  };

  const handleEdit = () => {
    dispatch(edit(contact));
  };

  const dispatch = useDispatch();
  return (
    <>
      <React.Fragment>
        <ListItem>
          <LoadingButton
            sx={{ margin: 2 }}
            size="small"
            onClick={handleEdit}
            loading={loading}
            variant="outlined"
            disabled={loading}
          >
            <span>edit</span>
          </LoadingButton>
          <ListItemText primary={primary} secondary={secondary} />
          <LoadingButton
            sx={{ margin: 2 }}
            size="small"
            onClick={handleDelete}
            loading={loading}
            variant="outlined"
            disabled={loading}
          >
            <span>delete</span>
          </LoadingButton>
        </ListItem>
      </React.Fragment>
    </>
  );
};
