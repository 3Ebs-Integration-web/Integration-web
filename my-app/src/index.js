import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './components/AuthContext';
import Navbare from './components/Navbar';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Inscirpition from './pages/Inscirpition';
import Contact from './pages/Contact';
import Products from './pages/products';
import AutoLayoutExample from './components/aboutus';
import Footer from './components/footerr';
import Payemen from './pages/paye';
import Signup from './signup';
import Login from './login';

const router = createBrowserRouter([
  {
    path: '/Inscirpition',
    element: <Signup />,
  },
  {
    path: '/Connexion',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Payemen',
    element: <Payemen />,
  },
  {
    path: '/App',
    element: <App />,
  },
  {
    path: '/about',
    element: <AutoLayoutExample />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/products',
    element: <Products />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Navbare />
      <RouterProvider router={router} />
      <Footer />
    </AuthProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
