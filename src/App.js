// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import LandingPage from './components/LandingPage';
import LocationChecker from './components/LocationChecker';

function App() {
  return (
    <div className="App">
      <LocationChecker>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/menu" element={<Menu />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
      </Router>
      </LocationChecker>
    </div>
  );
}

export default App;
