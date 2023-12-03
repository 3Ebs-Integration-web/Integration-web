import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './components/AuthContext';
import Navbare from './components/Navbar';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Inscirpition from './pages/Inscirpition';
import Contact from './pages/Contact';
import Products from './pages/products';
import AutoLayoutExample from './components/aboutus';
import Footer from './components/footerr';
import Payemen from './pages/paye';
import Signup from './signup';
import Login from './login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Navbare />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Inscirpition" element={<Signup />} />
          <Route path="/Connexion" element={<Login />} />
          <Route path="/Payemen" element={<Payemen />} />
          <Route path="/App" element={<App />} />
          <Route path="/about" element={<AutoLayoutExample />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
