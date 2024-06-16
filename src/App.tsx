import { createBrowserRouter } from "react-router-dom"
import { Landing } from "./pages/landing"
import { Detail } from "./pages/details"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/:id",
    element: <Detail />
  }
])

export default router