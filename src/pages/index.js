import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";

import SignInPage from "./auth/signin";
import VerifyPage from "./auth/verfify";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/confirm-new-device" element={<VerifyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);