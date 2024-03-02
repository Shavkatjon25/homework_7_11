import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import Contact from "./Contact"
import Portfolia from "./Portfolia"



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },  {
    path:'/portfolia',
    element:<Portfolia/>
  }
])

function Dom() {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default Dom