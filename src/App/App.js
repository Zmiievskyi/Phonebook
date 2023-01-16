import React, { useEffect } from 'react';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from 'Pages/SignIn';
import Contacts from '../Pages/Contacts';
import SignUp from '../Pages/SignUp';
import { RestrictedRoute } from 'Components/RestrictedRouter/RestrictedRouter';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

// const Contacts = lazy(() => import('../Pages/Contacts'));
// const SignIn = lazy(() => import('../Pages/SignIn'));
// const SignUp = lazy(() => import('../Pages/SignUp'));

function App() {

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(refreshUser());
},[dispatch])

  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route index element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        
        <Route
          path="/contacts"
          element={
            <RestrictedRoute redirectTo="/login" component={<Contacts />} />
          }
        />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
