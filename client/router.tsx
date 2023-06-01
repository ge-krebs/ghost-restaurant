import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Menu from './components/Menu'
import Order from './components/Order'
import Locker from './components/Locker'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/lockers" element={<Locker />}></Route>
    </Route>
  )
)

export default router
