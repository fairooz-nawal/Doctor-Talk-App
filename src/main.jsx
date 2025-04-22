import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import router from './Routes/Routes.jsx'
import ContextApi from './Pages/contextAPI/ContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <ContextApi>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </ContextApi>

)
