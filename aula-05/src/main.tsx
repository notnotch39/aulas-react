import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Contato, ErrorPage, InfoGeral, Login } from './pages'
import { DefaultLayout, PrivateRoute } from './layout'

const router = createBrowserRouter([
  {element: <PrivateRoute />, children: [
    {path: '/',  errorElement: <ErrorPage />, element: <Home />, children: [
      {path: 'info', element: <InfoGeral />},
      {path: 'contato', element: <Contato />},
    ]}
  ]},
  {element: <DefaultLayout />, children: [
    {path: '/login', element: <Login />, children: [
      {path: 'info', element: <InfoGeral />},
    ]}
  ]},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
