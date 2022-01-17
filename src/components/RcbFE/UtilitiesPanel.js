import React from "react";

//IMG imports
import eiffil from '../../static/media/eiffil.png' 
import goggles from '../../static/media/goggles.png'
import teddy  from '../../static/media/teddy.png'
import saturn from '../../static/media/saturn.png'


function RenderUtilityItem({data,styles}){

   if(data.id === 3){ 
     return(
      // <a key={data.id} onClick={() => downloadFile(`${data.url}`)} >
     <a key={data.id} href={data.url} download='3D_model.mp4' target="_blank" rel='noopener' rel="noreferrer">
      <div className={styles.rcb_utility}>
        <div className={styles.rcb_utility_icon}>
          <img src={data.img_src} alt="" />
        </div>
        <div className={styles.rcb_utility_text}>
          <div className={styles.rcb_utility_heading}>{data.head}</div>
          <div className={styles.rcb_utility_subheading}>
            {data.sub_head}
          </div>
        </div>
      </div>
      </a>
     )
   }else{
    return(
        <a href={data.url} key={data.id} target="_blank" rel='noopener' rel="noreferrer">
        <div className={styles.rcb_utility}>
          <div className={styles.rcb_utility_icon}>
            <img src={data.img_src} alt="" />
          </div>
          <div className={styles.rcb_utility_text}>
            <div className={styles.rcb_utility_heading}>{data.head}</div>
            <div className={styles.rcb_utility_subheading}>
              {data.sub_head}
            </div>
          </div>
        </div>
      </a>
    )
    }
}
function UtilitiesPanel({plyr,styles}) {

   let items = [
    {  
    id:1,      
    img_src:eiffil,
    head:'View on IPFS',
    sub_head:'Your NFT data stored safely forever',
    url:plyr.plyr_ipfs_link
   },
   {
    id:2,
    img_src:goggles,
    head:'View AR experience',
    sub_head:'See how your NFT looks in augmented reality',
    url:plyr.plyr_ar_link
   },
   {
    id:3,
    img_src: teddy ,
    head:'Download 3D Model',
    sub_head:'Instantly get acccess to the blend file',
    url:plyr.vid_url
   },
   {
    id: 4,
    img_src: saturn,
    head:'Join the community',
    sub_head:'Unlock Community access with your NFT',
    url:'https://www.royalchallengers.com/'
 }
]
  return (
    <div className={styles.rcb_utilities}>
      <div className={styles.rcb_utilities_container}>
       {items.map(item => <RenderUtilityItem data={item} styles={styles}/>)}
      </div>
    </div>
  );
}


export default UtilitiesPanel;
