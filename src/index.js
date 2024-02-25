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
    path: "/", 
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path:"home",
        element:<Home />,
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  },
  // {
  //   path:"home",
  //   element:<Home />,
  // },
  // {
  //   path: "contact",
  //   element: <Contact/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeWrapper>
  <React.StrictMode>
    {/* <RefactoredApp /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
  </ThemeWrapper>
);

