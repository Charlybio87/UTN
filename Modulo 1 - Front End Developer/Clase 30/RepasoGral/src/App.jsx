import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen'
import WorkspacesScreen from './Screen/WorkspacesScreen'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/workspace/:workspace_id/' element={<WorkspacesScreen/>}/>
        <Route path='/workspace/:workspace_id/:channel_id' element={<WorkspacesScreen/>}/>
      </Routes>
    
    </>
  )
}

export default App
