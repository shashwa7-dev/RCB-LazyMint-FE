import { useState } from "react";
import "./App.css";
import { MainScreen } from "./Pages/MainScreen/MainScreen";
import { TaskScreen } from "./Pages/TaskScreen/TaskScreen";
import { Routes, Route } from "react-router-dom";
import { PreviewNFT } from "./Pages/PreviewNFT/PreviewNFT";
import { ShareNFT } from "./Pages/ShareNFT/ShareNFT";
import { How2Connect } from "./Pages/How2Connect/How2Connect";

import data from "../src/data/rcb_players.json";
import create from "zustand";

export const useModalStore = create((set) => ({
  setA: false,
  setB: false,
  setC: false,
  setSetA: () => set({ setA: true }),
  setSetB: () => set({ setB: true }),
  setSetC: () => set({ setC: true }),
}));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainScreen plyr={data[0]} />} />
        <Route path="/tasks" element={<TaskScreen />} />
        <Route path="/claim_nft" element={<PreviewNFT plyr={data[0]} />} />
        <Route path="/share_nft" element={<ShareNFT plyr={data[0]} />} />
        <Route path="/tutorial" element={<How2Connect />} />
      </Routes>
    </div>
  );
}

export default App;
