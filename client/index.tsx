import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import App from './components/App'
import { router } from './router'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />
  )
})
