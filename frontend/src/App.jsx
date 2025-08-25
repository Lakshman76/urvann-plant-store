import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import PlantList from "./pages/PlantList";
import AddPlantForm from "./pages/AddPlantForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { isLoggedIn } from "./utils/auth";

function App() {
  const location = useLocation();
  const hideNavbar = ["/login", "/signup"];

  const isNavbarHide = hideNavbar.some((path) =>
    location.pathname.startsWith(path)
  );

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {!isNavbarHide && <Navbar />}
        <Routes>
        <Route
          path="/plants"
          element={isLoggedIn() ? <PlantList /> : <Navigate to="/login" />}
        />
          <Route
          path="/add"
          element={
            <ProtectedRoute user={user} allowedRoles={["admin"]}>
              <AddPlantForm />
            </ProtectedRoute>
          }
        />
          <Route
          path="/login"
          element={isLoggedIn() ? <Navigate to="/plants" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn() ? <Navigate to="/plants" /> : <Signup />}
        />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </>
  );
}

export default App;
