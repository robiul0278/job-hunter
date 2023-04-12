import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import cartJobLoader from './components/Loader/CartJobLoader';
import ErrorPage from './components/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/featured.json')
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/featured.json`)
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
        // loader: cartJobLoader
        loader: () => fetch('/featured.json')
      },
      {
        path: "statistic",
        element: <Statistics></Statistics>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
