import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import About from './component/About.jsx'
import Contact from './component/Contact.jsx'

// const router = createBrowserRouter(
//   [
//    {
//     path:'/',
//     element:<App/>,
//     children:[
     
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//    }
//   ]
// )

createRoot(document.getElementById('root')).render(
 
  //  <RouterProvider router={router} />
  <App/>
    
   
  
)
