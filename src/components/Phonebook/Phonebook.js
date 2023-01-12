import { useDispatch } from 'react-redux';
import { Box, Button, Label } from 'components/Common/Common.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { addContact } from 'redux/phonebookSlice';
import { addContact } from 'redux/operations';

let schema = yup.object().shape({
  name: yup.string().min(4).max(12).required(),
  phone: yup.number().required(),
});


const initialValues = { 
  name: '', 
  phone: '' 
};

const Phonebook = () => {

  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        border="1px solid"
      >
        <Form autoComplete="off">
          <Label>
            Name
            <Field
              type="text"
              name="name"
            />
            <ErrorMessage name="name" />
          </Label>
          <Label>
            Number
            <Field
              type="tel"
              name="phone"
            />
            <ErrorMessage name="phone" />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Box>
    </Formik>
  );
};

export default Phonebook;
