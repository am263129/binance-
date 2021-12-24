import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Layout = ({
  children,
  title,
}) => {

  return (
    <div className={`flex flex-col items-center min-h-screen justify-between relative`}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
