import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Import Sidebar
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Adminn from "./pages/Adminn";
import Dashboard from "./pages/Dashboard";
import "./App.css";

// Layout for main content pages (with Navbar)
const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

// Layout for Admin (with Sidebar)
const AdminLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ marginLeft: "16rem", flex: 1 }}>{children}</div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes (with Navbar) */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />

        {/* Admin and Dashboard Routes (with Sidebar) */}
        <Route path="/admin" element={<AdminLayout><Adminn /></AdminLayout>} />
        <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
