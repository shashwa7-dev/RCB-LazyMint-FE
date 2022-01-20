import MicroSiteNav from "./MicrositeNav"
import UtilitiesPanel from "./UtilitiesPanel"
import DisplayPanel from "./DisplayPanel"
import styles from '../../static/styles/phyg_styles.module.css'

function MicroSitePhygitals(){

    const nft = {
        project_name:'Protector Of LABverse',
        nft_name: 'OG Polygon',
        nft_id:'001',
        url:'https://verify.dehidden.com/phygitals/kit'
    }
    return(
        <div className={styles.phygBody}>
        <div className={styles.microsite}>
           <MicroSiteNav nft={nft}  styles={styles}/>
           <div className={styles.microsite_page}>
           <DisplayPanel nft={nft} styles={styles}/>
            <div className={styles.mainpanel} > 
             <UtilitiesPanel styles={styles}/>
            </div>
           </div>        
        </div>
        </div>
    )
}

export default MicroSitePhygitals