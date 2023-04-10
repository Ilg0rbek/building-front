import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './Context'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import Home from './stores/home'
import Todo from './stores'
const root = ReactDOM.createRoot(document.getElementById('root'))
const myTodo = new Todo()
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        {/* <App /> */}
        <Home Todo={myTodo} />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
