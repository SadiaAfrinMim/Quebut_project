import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "tailwindcss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar.jsx';
import Graph from './Component/Graph.jsx';
import Table from './Component/Table.jsx';
import SingleGraph from './Component/SingleGraph.jsx';
import SingleTable from './Component/SingleTable.jsx';
import SystemSettings from './Component/SystemSettings.jsx';
import UserManagement from './Component/UserManagement.jsx';
import AddBranch from './Component/AddBranch.jsx';

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
  

  
  <Route>
  <Route path='/graph1' element={<SingleGraph></SingleGraph>}>
  <Route path='/graph1'  element={<SingleTable></SingleTable>}></Route>
  </Route>



  </Route>

  
  </Route>
 
 
  </Route>
  
  </Routes>
</BrowserRouter>
)
