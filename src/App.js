import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';

// Home component for the LMS welcome page
const Home = () => {
  return (
    <div>
      <h1>Welcome to LMS</h1>
    </div>
  );
};

// About Page Component with detailed information about LMS
const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Learning Management System (LMS)</h1>
      <p>
        Our LMS is designed to facilitate a smooth and engaging learning experience for both students and instructors. It integrates various 
        educational tools and resources, making online learning accessible and efficient.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Interactive Course Management</li>
        <li>User-Friendly Interface</li>
        <li>Real-Time Performance Tracking</li>
        <li>Integrated Communication Tools</li>
        <li>Customizable Learning Paths</li>
        <li>Support for Various Content Types (videos, quizzes, forums)</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        We aim to empower educators and learners by providing an innovative platform that enhances the educational experience through technology. 
        Our goal is to make learning accessible, engaging, and effective for everyone, anywhere, anytime.
      </p>
    </div>
  );
};

// Contact Page with sample information
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We're here to help! If you have any questions or need support, feel free to reach out to us using the information below.</p>
      <div className="contact-details">
        <h2>Customer Support</h2>
        <p><strong>Email:</strong> 2200032104cseh@gmail.com</p>
        <p><strong>Phone:</strong> +91 8919650542</p>
        <p><strong>Office Address:</strong> Tadepalli, 52211, Vijayawada, Andhra Pradesh, India</p>
      </div>
    </div>
  );
};

// SignIn component with email and password fields
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging In:');
    console.log('Email:', email);
    console.log('Password:', password);

    // After successful login, redirect to the home page
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
      
      {/* "Don't have an account? Join Now" section */}
      <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to="/join">
          <button className="join-button">Join Now</button>
        </Link>
      </div>
    </div>
  );
};

// SignUp component for new users
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registering:');
    console.log('Email:', email);
    console.log('Password:', password);

    // After successful registration, redirect to the home page
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1>Join Us</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Join Now
        </button>
      </form>
    </div>
  );
};

// NavItem component for individual list items
const NavItem = ({ text, to }) => {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
};

// Navbar component for the entire navigation menu
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavItem text="HOME" to="/" />
        <NavItem text="ABOUT" to="/about" />
        <NavItem text="CONTACT" to="/contact" />
        <NavItem text="SIGN IN" to="/signin" />
        <NavItem text="JOIN" to="/join" />
      </ul>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Navbar />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/join" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
