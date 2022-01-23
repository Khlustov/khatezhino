import React from "react";
import { Helmet } from "react-helmet";

import './layout.less';
import Footer from "../Footer/Footer";

const Layout = ({pageTitle, children}) => {
  return (
    <>
    <Helmet title={pageTitle}/>
    <div className="main">
        <div className="wrapper">
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Layout