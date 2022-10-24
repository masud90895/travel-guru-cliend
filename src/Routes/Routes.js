import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Contact from "../Components/contact";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Hotels from "../Components/Hotels";
import Login from "../Components/Login";
import SelectedPlace from "../Components/SelectedPlace";
import SingUp from "../Components/SingUp";
import Main from "../layout/Main";
import PriveteRoute from "./PriveteRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=> fetch ('https://travel-guru-server-beige.vercel.app/')
        },
        {
          path:'/login',
          element: <Login></Login>,
         
        },
        {
          path:'/register',
          element: <SingUp></SingUp>,
         
        },
        {
          path:'/contact',
          element: <Contact/>,
         
        },
        {
          path:'/blog',
          element: <Blog/>,
         
        },
        {
            path:"place/:id",
            element:<SelectedPlace></SelectedPlace>,
            loader: ({params})=> fetch (`https://travel-guru-server-beige.vercel.app/place/${params.id}`)
        },
        {
            path:"hotel/:id",
            element: <PriveteRoute><Hotels/></PriveteRoute>,
            loader: ({params})=> fetch (`https://travel-guru-server-beige.vercel.app/place/${params.id}`)           
        },
      ]
    }
  ])

  export default router