import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "tailwindcss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Mainlayout/App';
import Graph from './Page/Graph';
import Table from './Component/Table';
import SystemSettings from './Page/SystemSettings';
import UserManagement from './Page/UserManagement';
import AddBranch from './Page/AddBranch';



createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <Routes >
  <Route element={<App></App> }>
  
  <Route>
  <Route path="/" element={<Graph></Graph>}>  </Route>
  <Route path="/:branch" element={<Graph></Graph>}>  </Route>
  
  <Route path='/' element={<Table></Table>}></Route>
  <Route path='/admin' element={<SystemSettings></SystemSettings>}></Route>
  <Route path='/users' element={<UserManagement></UserManagement>}></Route>
  <Route path='/add-branch' element={<AddBranch></AddBranch>}></Route>
  

  
  



  </Route>

  
  </Route>
 
 

  
  </Routes>
</BrowserRouter>
)
