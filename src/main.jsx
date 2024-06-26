import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Bag from "./routes/Bag.jsx"
import Home from './routes/Home.jsx';
import { Provider } from "react-redux";
import myntraStore from './store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const router=createBrowserRouter([
  {
  path:"/",
  element:<App />,
  children:[
  {path:"/myntra-backend",element:<Home/>,},
  {path:"/myntra-backend/bag",element:<Bag/>},
  ]
  }
  ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
