import { Routes, Route } from "react-router-dom";

// layout
import MainLayout from "../layout/MainLayout";

// pages
import Home from "../pages/Home";
import Profile from "../pages/Profile"; // This will now serve as Vendor Info

import vendorConfig from "../config/vendor";

const AppRouter = () => {
  // Use vendor ID to create unique route
  const vendorRoute = `/vendor/${vendorConfig.vendorId}`;

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* Vendor Info Page */}
      <Route
        path={vendorRoute}
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
