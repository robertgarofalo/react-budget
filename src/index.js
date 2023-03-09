import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// RRD
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error!</h1>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

