import React from "react";
// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Contacts from "../Pages/Contacts";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/ggoit-react-hw-08-phonebook/signup" element={<SignUp />} />
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={<Contacts />}
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
