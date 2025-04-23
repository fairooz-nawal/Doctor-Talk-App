
import {
    createBrowserRouter,
  } from "react-router";
import Roots from '../Pages/roots/Roots';
import MyBookings from '../Pages/myBookings/MyBookings';
import Home from '../Pages/home/Home';
import Error from '../Pages/Error/Error';
import DoctorDetail from '../Pages/home/DoctorDetail';
import BlogsContainer from "../Pages/Blogs/BlogsContainer";
const router = createBrowserRouter([
    {
      path: "/",
      Component: Roots,
      children:[
        {
          index:true,
          path:"/",
          // @ts-ignore
          Component:Home
        },
        {
          path:"/myBooking",
          Component:MyBookings
        },
        {
          path:"/blogs",
          loader: ()=>fetch('./Question.json'),
          Component:BlogsContainer
        },
        {
          path:"/detail/:id",
          Component:DoctorDetail
        },
        // {
        //   path:"/detail/:id(13|14|15|...)",
        //   Component:Error
        // },
      ]
    },
    {
      path:"*",
      Component:Error
    }
  ]);

  export default router;