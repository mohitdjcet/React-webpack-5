import Page from "../Page";
import React from "react";

// const Order = React.lazy(() => import("order/Modal"));
const DispatchManagement = React.lazy(() => import("dispatch/Dispatch"));
const RoutingPage = () => (
  <Page title="Order">
    <React.Suspense fallback="Loading Tabs...">
      {/* <Order /> */}
      <DispatchManagement/>
    </React.Suspense>
  </Page>
);

export default RoutingPage;
