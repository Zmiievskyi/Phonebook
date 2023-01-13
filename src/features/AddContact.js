import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contacts/operations";

const validationSchema = yup.object({
  name: yup.string("Enter name").required("Name is required"),
  number: yup.number("Enter phone number").required("Phone number is required"),
});

export const AddContact = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addContact(values));
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
          //   type="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};
