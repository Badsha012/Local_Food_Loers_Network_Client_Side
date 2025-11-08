import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";


const router = createBrowserRouter([
  {
  path:'/',
    element: <Root></Root>
  },
]);

export default router;
