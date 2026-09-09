import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import Root from "./routes/Root"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import Tables from "./components/Tables/Tables"

import { ROUTES } from "./routes/routes"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.DASHBOARD} element={<Root />}>
        <Route index element={<DashboardPage />} />
        <Route path={ROUTES.TABLES} element={<Tables />} />
      </Route>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
