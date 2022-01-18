import React from "react";
import MicroSitePhygitals from "./components/PhygyFE/Microsite";
import MicroSiteRCB from "./components/RcbFE/Microsite";
import NotFound from "./components/404";
import { Route, Routes} from 'react-router-dom'


import { MainScreen } from "./components/RcbFE/Pages/MainScreen/MainScreen";
import { TaskScreen } from "./components/RcbFE/Pages/TaskScreen/TaskScreen";
import { PreviewNFT } from "./components/RcbFE/Pages/PreviewNFT/PreviewNFT";
import { ShareNFT } from "./components/RcbFE/Pages/ShareNFT/ShareNFT";
import { How2Connect } from "./components/RcbFE/Pages/How2Connect/How2Connect.jsx";


import data from "./data/rcb_players.json";
/*
Incase hosting of fleek.co
> IPFS gateways url are formatted in the following manner ipfs.io/ipfs/$hash. As such, the SPA might think that the root of the application is ipfs.io instead of ipfs.io/ipfs/$hash. For this reason, we recommend apps use hash routing to minimize such errors when using an IPFS gateway.

> Adding a hash router in React: https://reactrouter.com/web/api/HashRouter
> basename attribute is basically is prefixer for our has routes
*/

import create from "zustand";

export const useModalStore = create((set) => ({
  setA: false,
  setB: false,
  setC: false,
  error: false,
  setSetA: () => set({ setA: true }),
  setSetB: () => set({ setB: true }),
  setSetC: () => set({ setC: true }),
  setError: () => set({ error: false }),
  setErrorTrue: () => set({ error: true }),
}));

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Routes>
        <Route exact path="/phygitals/kit/" element={<MicroSitePhygitals />}/>
        <Route exact path="/rcb/:plyrID" element={<MicroSiteRCB/>}/>
        <Route path="*" element ={<NotFound />}/>
        <Route exact path="/auth" element={<MainScreen plyr={data[0]} />} />
        <Route exact path="/auth/tasks" element={<TaskScreen />} />
        <Route exact path="/auth/claim_nft" element={<PreviewNFT plyr={data[0]} />} />
        <Route exact path="/auth/share_nft" element={<ShareNFT plyr={data[0]} />} />
        <Route exact path="/auth/tutorial" element={<How2Connect />} />
      </Routes>
    </div>
  );
  }
}

export default App;
