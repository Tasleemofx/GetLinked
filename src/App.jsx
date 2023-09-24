
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router} />
    </>
  )
}

export default App
