import MicroSiteNav from "./MicrositeNav"
import UtilitiesPanel from "./UtilitiesPanel"
import DisplayPanel from "./DisplayPanel"
import '../../static/styles/phyg_styles.css'

function MicroSitePhygitals(){

    const nft = {
        project_name:'Protector Of LABverse',
        nft_name: 'OG Polygon',
        nft_id:'001',
        url:'https://verify.dehidden.com/phygitals/kit'
    }
    return(
        <div class='phygBody'>
        <div className="microsite">
           <MicroSiteNav nft={nft}/>
           <div className="microsite_page">
           <DisplayPanel nft={nft} />
            <div className="mainpanel">
             <UtilitiesPanel />
            </div>
           </div>        
        </div>
        </div>
    )
}

export default MicroSitePhygitals