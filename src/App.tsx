import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import Dashboard from "./components/Dashboard/Dashboard"
import Tables from "./components/Tables/Tables"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Root />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tables" element={<Tables />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
