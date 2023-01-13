import React from "react";
// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Contacts from "../Pages/Contacts";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { getIsLogin } from "../redux/auth/selectors";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        {/* <Route index element={<SignIn />} /> */}
        {/* <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="movies" element={<Movies />} /> */}

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
