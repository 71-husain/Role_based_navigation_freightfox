import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Billing from './pages/Billing/Billing'
import Orders from './pages/Orders/Orders'
import Unauthorized from './pages/Unauthorized'
import ProtectedRoute from './routes/ProtectedRoute'
import { routeConfig } from './routes/routeConfig'
import Sidebar from './components/Sidebar/Sidebar'

// Maps module names in routeConfig to their actual components
const componentMap = {
  Orders: Orders,
  Billing: Billing,
}

function App() {
  return (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-8">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {routeConfig.map((route) => {
          const PageComponent = componentMap[route.module]
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute module={route.module} permission={route.permission}>
                  <PageComponent />
                </ProtectedRoute>
              }
            />
          )
        })}
      </Routes>
    </div>
  </div>
)
}

export default App