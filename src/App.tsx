import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import Root from "./routes/Root"
import DashboardPage from "./pages/DashboardPage/DashboardPage"

import { ROUTES } from "./routes/routes"
import NftPage from "./pages/NftPage/NftPage"
import TablePage from "./pages/TablePage/TablePage"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.DASHBOARD} element={<Root />}>
        <Route index element={<DashboardPage />} />
        <Route path={ROUTES.TABLES} element={<TablePage />} />
        <Route path={ROUTES.NFT} element={<NftPage />} />
      </Route>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
