import { useState } from 'react'
import './App.css'
import { MainScreen } from './Pages/MainScreen/MainScreen'
import { TaskScreen } from './Pages/TaskScreen/TaskScreen'
import {Routes, Route} from 'react-router-dom'
import { PreviewNFT } from './Pages/PreviewNFT/PreviewNFT'

import data from '../src/data/rcb_players.json'
import { Wallet } from './Components/Wallet/Wallet'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainScreen plyr={data[0]}/> } />
        <Route path='/tasks' element={<TaskScreen />} />
        <Route path='/claim_nft' element={<PreviewNFT plyr={data[0]}/>} />
        <Route path='/wallet' element={<Wallet />} />
      </Routes>
    </div>
  )
}

export default App
