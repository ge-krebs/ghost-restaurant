import { Outlet } from 'react-router-dom'

import Header from './Header'
import Home from './Home'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
