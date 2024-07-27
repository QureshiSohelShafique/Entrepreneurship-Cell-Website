import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Events,
  Leaderboard,
  NotFound,
  EventDetails,
  College,
} from "./pages";

import {
  Admin,
  AdminLogin,
  CreateEvent,
  EditEvent,
  PointsDistribution,
} from "./admin";

import { Layout } from "./components";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { pathname } = useLocation();

  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />

        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/college/:collegeId" element={<College />} />

        {isLoggedIn ? (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/create-event" element={<CreateEvent />} />
            <Route
              path="/admin/points-distribution"
              element={<PointsDistribution />}
            />
            <Route path="/admin/edit-event/:id" element={<EditEvent />} />
          </>
        ) : (
          <Route path="/admin" element={<AdminLogin />} />
        )}

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
