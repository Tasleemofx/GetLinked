import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppContext } from "./context/appcontext.jsx"
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

const baseUrl = "https://backend.getlinked.ai"
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext.Provider value={{baseUrl}}>
    <App/>
  </AppContext.Provider>
)
