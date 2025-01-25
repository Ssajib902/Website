import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu/Menu";
import Order from "../pages/Home/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "../routes/PrivateRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/All Users/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import About from "../pages/Home/About/About";
import BkashPayment from "../pages/Dashboard/Payment/BkashPayment";
import AllPayments from "../pages/Dashboard/Payment/AllPayments";
import CashOnDelivery from "../pages/Dashboard/Payment/CashOnDelivery";
import NagadPayment from "../pages/Dashboard/Payment/NagadPayment";
import RocketPayment from "../pages/Dashboard/Payment/RocketPayment";
import AdminHome from "../pages/Dashboard/AdminHome";
import ProductDetails from "../Components/FoodCard/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/order/:category",
        element: <Order />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/secret",
        element: <PrivateRoutes><Secret /></PrivateRoutes>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      // Normal User
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "all-payments",
        element: <AllPayments />
      },
      {
        path: "payment",
        element: <Payment />
      },
      {
        path: "bkash",
        element: <BkashPayment />
      },
      {
        path: "cashondelivery",
        element: <CashOnDelivery />
      },
      {
        path: "nagad",
        element: <NagadPayment />
      },
      {
        path: "rocket",
        element: <RocketPayment />
      },

      // admin routes
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: "addItems",
        element: <AdminRoute><AddItems /></AdminRoute>
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute><UpdateItem /></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "allusers",
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
    ]
  }
]);
