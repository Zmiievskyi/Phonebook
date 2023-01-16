import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';

import { logOut } from '../../redux/auth/operations';
import { setModal, setFilter } from '../../redux/contacts/phonebookSlice';
import { isLoading } from 'redux/contacts/selectors'; 

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const dispatch = useDispatch();
  const isDelete = useSelector(isLoading);

  const handleInput = e => {
    const search = e.target.value;
    dispatch(setFilter(search));
  };

  return (
    <AppBar position="fixed" color="ua" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <LoadingButton
          variant="outlined"
          color="uab"
          loading={isDelete}
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Log Out
        </LoadingButton>
        <StyledFab
          color="secondary"
          aria-label="add"
          onClick={() => {
            dispatch(setModal());
          }}
        >
          <AddIcon />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <input
            autoComplete="off"
            type="text"
            name="filter"
            onChange={handleInput}
          />
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
