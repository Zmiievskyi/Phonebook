import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from '../redux/contacts/selectors';
import { setModal } from '../redux/contacts/phonebookSlice';
import { AddContact } from './AddContact';
import { EditContact } from './EditContact';
import { getIsEdit } from 'redux/contacts/selectors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal() {
  const isOpen = useSelector(getModalState);
  const isEdit = useSelector(getIsEdit);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal())

  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isEdit ? <EditContact /> : <AddContact />}
          </Box>
      </Modal>
    </div>
  );
}
