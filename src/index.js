import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Root from "./routes/root"
import Contact from "./routes/contact"
import ErrorPage from "./error-page"
import Home from "./routes/home"
import About from "./routes/about"
import Index from "./routes/index"
import ThemeWrapper from './context/ThemeWrapper';

const router = createBrowserRouter([
  {
    path: "/e-learning-clone/", 
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path:"e-learning-clone/home",
        element:<Home />,
      },
      {
        path: "e-learning-clone/contact",
        element: <Contact/>
      },
      {
        path: "e-learning-clone/about",
        element: <About/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeWrapper>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </ThemeWrapper>
);

