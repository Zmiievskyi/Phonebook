import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import { deleteContact } from '../../redux/contacts/operations';

export const Contact = ({ primary, secondary, id }) => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = async () => {
    setLoading(true)
    await dispatch(deleteContact(id));
    setLoading(false)
  };


  const dispatch = useDispatch();
  return (
    <>
      <React.Fragment>
        <ListItem>
          <LoadingButton
            sx={{ margin: 2 }}
            size="small"
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled={loading}
          >
            <span>delete</span>
          </LoadingButton>
          <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
      </React.Fragment>
    </>
  );
};
