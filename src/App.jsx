import { useState } from 'react'
import './App.css'
import { MainScreen } from './Pages/MainScreen/MainScreen'
import { TaskScreen } from './Pages/TaskScreen/TaskScreen'
import {Routes, Route} from 'react-router-dom'
//Components Import

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainScreen /> } />
        <Route path='/tasks' element={<TaskScreen />} />
      </Routes>
    </div>
  )
}

export default App
