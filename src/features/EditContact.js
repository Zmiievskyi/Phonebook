import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../redux/contacts/operations';

const validationSchema = yup.object({
  name: yup.string('Enter name').required('Name is required'),
  number: yup.number('Enter phone number').required('Phone number is required'),
});

export const EditContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.phonebook.contacts.id);

  const formik = useFormik({
    initialValues: {
      name: contact.name,
      number: contact.number,
    },
    validationSchema: validationSchema,

    onSubmit: values => {
      dispatch(
        editContact({
          id: contact.id,
          name: values.name,
          number: values.number,
        })
      );
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="normal"
          fullWidth
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Edit
        </Button>
      </form>
    </div>
  );
};
