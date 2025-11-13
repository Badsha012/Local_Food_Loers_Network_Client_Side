import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Favorites from "../Pages/Favorites";
import AllReviews from "../Pages/AllReviews";
import MyReviews from "../Pages/MyReviews";
import AddReivews from "../Pages/AddReivews";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
  path:'/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/',
        element:<Home></Home>,
    
        

      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/favorites',
        element:<Favorites></Favorites>
      },
      {
        path:'all-reviews',
        element:<AllReviews></AllReviews>
      },
      {
        path:'/reviews',
        element:<MyReviews></MyReviews>
      },
      {
        path:'/add-reveiws',
        element:<AddReivews></AddReivews>
      }

    ]
  },
 
]);

export default router;
