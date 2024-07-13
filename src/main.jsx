import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Gear from './pages/Gear';
import Services from './pages/Services';
import PageNotFound from './pages/errors/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/galerija',
    element: <Gallery />,
  },
  {
    path: '/kontaktai',
    element: <Contact />,
  },
  {
    path: '/iranga',
    element: <Gear />,
  },
  {
    path: '/paslaugos',
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
