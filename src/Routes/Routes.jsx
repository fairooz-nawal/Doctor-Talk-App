import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Roots from '../Pages/roots/Roots';
import MyBookings from '../Pages/myBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/home/Home';
import Error from '../Pages/Error/Error';
const router = createBrowserRouter([
    {
      path: "/",
      Component: Roots,
      children:[
        {
          index:true,
          path:"/",
          Component:Home
        },
        {
          path:"/home",
          Component:Home
        },
        {
          path:"/myBooking",
          Component:MyBookings
        },
        {
          path:"/blogs",
          Component:Blogs
        },
        {
          path:"/contactUs",
          Component:Contact
        }

      ]
    },
    {
      path:"*",
      Component:Error
    }
  ]);

  export default router;