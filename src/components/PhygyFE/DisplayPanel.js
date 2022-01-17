import React from "react";
import loveabot from '../../static/media/loveabot.mp4' 
import opensealogo from '../../static/media/opensealogo.svg'

function DisplayPanel({ nft , styles}) {
  return (
    <div className={styles.nftdisplay}>
      <div className={styles.nftdisplay_container}>
        <div className={`${styles.nftdisplay_nft} ${styles.floating}`}>
          <video src={loveabot} autoPlay loop muted playsInline></video>
        </div>
        <div className={styles.projectname}>{nft.project_name}</div>
        <div className={styles.nftname}>{nft.nft_name}</div>
        <div className={styles.nftnumber}>#{nft.nft_id}</div>
        <div className={styles.aboutbutton}>
            <button className={`${styles.button} ${styles.primary}`}>
            <img src={opensealogo} alt='opensea-logo'/>
            <span> <a href='https://opensea.io/' target='_blank'>View on Opensea</a></span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayPanel;
