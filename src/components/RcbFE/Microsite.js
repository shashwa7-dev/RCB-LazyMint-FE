import MicroSiteNav from "./MicrositeNav"
import UtilitiesPanel from "./UtilitiesPanel"
import DisplayPanel from "./DisplayPanel"
import { useParams,useNavigate } from 'react-router-dom'
import RCB_PLYR_DATA from '../../data/rcb_players.json'
import NotFound from "../404"
import styles from '../../static/styles/rcb_FE.module.css'

import { useEffect,useState } from 'react'

function MicroSiteRCB(){

 
  const navigate = useNavigate() 
    let plyr = false
    const {plyrID} = useParams()
    localStorage.setItem('PLYR',plyrID)
    console.log(plyrID)
    const [data,setData] = useState(false)
    useEffect(() => {
         console.log("hello")
        let GET_LOCAL = localStorage.getItem('claimed_nft')
     
        if(!GET_LOCAL || GET_LOCAL === 'false'){
           navigate("/main")
        } else {
          let Ply_ID = localStorage.getItem('PLYR')
            console.log(Ply_ID)
        plyr = RCB_PLYR_DATA.filter(player => player.plyr_id == Ply_ID || player.plyr_name_id == Ply_ID) 
            setData(plyr)
    }

    }, [])

  
   console.log(data)

    return(
        // validating plyr param before rendering it to dom
        //if ply is invalid or doesn't exists it will be redicted to Not found page!
        data && data[0] ? (
        <div className={styles.rcbBody}>
        <div className={styles.rcb_microsite}>
           <MicroSiteNav plyr={data[0]} styles={styles}/>
           <div className={styles.rcb_microsite_page}>
           <DisplayPanel plyr={data[0]} styles={styles}/>
            <div className={styles.rcb_mainpanel}>
             <UtilitiesPanel plyr={data[0]} styles={styles}/>
            </div>
           </div>        
        </div>
        </div>) : <NotFound />
    )
}

export default MicroSiteRCB