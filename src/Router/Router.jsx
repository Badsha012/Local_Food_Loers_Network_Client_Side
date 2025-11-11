import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";


const router = createBrowserRouter([
  {
  path:'/',
    element: <Root></Root>,
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
      }

    ]
  },
  {

  }
]);

export default router;
