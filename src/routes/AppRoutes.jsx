import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import PlanTrip from "../pages/Plantrip";
import SavedTrips from "../pages/SavedTrips";
import TripDetails from "../pages/TripDetails";
import Settings from "../pages/Settings";

function Placeholder({ text }) {
  return (
    <h2 className="text-2xl font-bold text-gray-700 dark:text-white">{text}</h2>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="plan" element={<PlanTrip />} />
          <Route
            path="trips"
            element={<SavedTrips />}
          />
          <Route path="trip/:id" element={<TripDetails />} />
          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
