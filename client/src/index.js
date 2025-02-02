import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/Errorpage';
import Main from './pages/Main';
import MusicianSignup from './pages/MusicianSignup';
import RestaurantSignup from './pages/RestaurantSignup';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Main />},
      {path: "MusicianSignup", element:<MusicianSignup />},
      {path: "RestaurantSignup", element:<RestaurantSignup />},
      {path: "Login", element:<Login />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
