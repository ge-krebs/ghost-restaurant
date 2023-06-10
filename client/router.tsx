import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Order from './components/Order'
import Lockers from './components/Lockers'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/lockers" element={<Lockers />}></Route>
    </Route>
  )
)

export default router
