import React from "react";
import Layout from "../components/Layout/Layout";
import ErrorComponent from "../components/404PageComponents/ErrorPage";

import '../style/general.less';

const Error = () => (
  <Layout pageTitle='ooops'>
    <ErrorComponent/>
  </Layout>
)

export default Error;