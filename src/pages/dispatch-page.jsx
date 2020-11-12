import Page from "../Page";
import React from "react";

// const Dispatch = React.lazy(() => import("dispatch/Dialog"));
const DispatchManagement = React.lazy(() => import("dispatch/Dispatch"));

const RoutingPage = () => (
  <Page title="Dispatch">
    <React.Suspense fallback="Loading Tabs...">
      {/* <Dispatch /> */}
      <DispatchManagement/>
    </React.Suspense>
  </Page>
);

export default RoutingPage;
