//import { usePage } from "./layout/PageContext";
import { Routes, Route } from "react-router";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import Layout from "./layout/Layout";

import ActivityDetail from "./activities/ActivityDetail";

/**
 * Fitness Tracker is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
// export default function App() {
//   const { page } = usePage();

//   if (page === "register") return <Register />;
//   if (page === "login") return <Login />;
//   if (page === "activities") return <ActivitiesPage />;

//   return <Error404 />;
// }
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:id" element={<ActivityDetail />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
