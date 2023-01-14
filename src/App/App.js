import React from 'react';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from 'Pages/SignIn';
import Contacts from '../Pages/Contacts';
import SignUp from '../Pages/SignUp';

// const Contacts = lazy(() => import('../Pages/Contacts'));
// const SignIn = lazy(() => import('../Pages/SignIn'));
// const SignUp = lazy(() => import('../Pages/SignUp'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route index element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
