import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Worcester from "./routes/Worcester"
import Franklin from './routes/Franklin'
import Berkshire from './routes/Berkshire'
import Hampshire from './routes/Hampsire'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/worcester',
    element: <Worcester />
  },
  {
    path: '/franklin',
    element: <Franklin />
  }, 
  {
    path: '/berkshire',
    element: <Berkshire />
  },
  {
    path: '/hampshire',
    element: <Hampshire />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
