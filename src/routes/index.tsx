import React from "react";
import { createBrowserRouter } from "react-router-dom";


import AdminLayout from "@/layouts/AdminLayout";
import RequiredAuth from "@/components/RequiredAuth";

const Login = React.lazy(()=>import("../pages/login/Login"))
const Home = React.lazy(()=>import("../pages/home/Home"))
const Goods = React.lazy(()=>import("../pages/goods/Goods"))
const Order = React.lazy(()=>import("../pages/order/Order"))
const User = React.lazy(()=>import("../pages/user/User"))
const Profile = React.lazy(()=>import("../pages/profile/Profile"))
const NotFound = React.lazy(()=>import("../pages/404/NotFound"))


const routes = createBrowserRouter([
  {
    element: <AdminLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <RequiredAuth><Home /></RequiredAuth> 
      },
      {
        path: "/goods",
        element: <RequiredAuth><Goods /></RequiredAuth> 
      },
      {
        path: "/orders",
        element: <RequiredAuth><Order /></RequiredAuth> 
      },
      {
        path: "/users",
        element: <RequiredAuth><User /></RequiredAuth> 
      },
      {
        path: "/profile",
        element: <RequiredAuth><Profile /></RequiredAuth>
      }
    ]
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  }
])


export default routes