// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Destinations from "./pages/destinations";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Japan from "./pages/countries/Japan";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Brazil from "./pages/countries/brazil";
import Italy from "./pages/countries/italy";
import Greece from "./pages/countries/greece";
import Iceland from "./pages/countries/iceland";
import Maldives from "./pages/countries/maldives";


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Destinations />
              <AboutUs />
              <Contact />
              <Testimonials />
              <Newsletter />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/brazil" element={<Brazil />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/greece" element={<Greece />} />
        <Route path="/iceland" element={<Iceland />} />
        <Route path="/maldives" element={<Maldives />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
