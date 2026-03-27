import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import Customer from "./pages/Admin/Customer.jsx";
import AllTickets from "./pages/Admin/AllTickets.jsx";
import Cancelled from "./pages/Admin/Cancelled.jsx";
import RouteManagement from "./pages/Admin/RouteManagement.jsx";
import Seat from "./pages/Admin/Seat.jsx";
import Schedule from "./pages/Admin/Schedule.jsx";
import Vehicles from "./pages/Admin/Vehicles.jsx";
import Notification from "./pages/Admin/Notification.jsx";
import UserList from "./pages/Admin/User/UserList.jsx";
import UserRole from "./pages/Admin/UserRole.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Login/Register.jsx";

//Protected route wrapper
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected admin routes */}
        <Route
          element={
            <PrivateRoute>
              <MainLayout /> {/* MainLayout must have <Outlet /> inside */}
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/all_tickets" element={<AllTickets />} />
          <Route path="/cancelled" element={<Cancelled />} />
          <Route path="/route_management" element={<RouteManagement />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/notification" element={<Notification />} />

          {/*User routes */}
          <Route path="/user" element={<UserList />} />
          <Route path="/user_role" element={<UserRole />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
