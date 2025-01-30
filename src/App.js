import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import LocationChecker from './components/LocationChecker';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import { AuthProvider } from './context/AuthContext'; // Import Auth Context

function App() {
  return (
    <AuthProvider>
      <LocationChecker>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />

            {/* Protecting the Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </LocationChecker>
    </AuthProvider>
  );
}

export default App;
