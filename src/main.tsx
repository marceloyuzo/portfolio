import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'

import 'swiper/css'
import 'swiper/css/bundle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
