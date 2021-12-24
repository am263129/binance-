import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";

import VerifyPage from "./auth/verfify";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerifyPage />} />
          <Route path="/confirm-new-device" element={<VerifyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);