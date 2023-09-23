
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';


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
    <RouterProvider router={router} />
  )
}

export default App
