import React from "react";
import loveabot from '../../static/media/loveabot.mp4' 
import opensealogo from '../../static/media/opensealogo.svg'

function DisplayPanel({ nft }) {
  return (
    <div className="nftdisplay">
      <div className="nftdisplay_container">
        <div className="nftdisplay_nft floating">
          <video src={loveabot} autoPlay loop muted playsInline></video>
        </div>
        <div className="projectname">{nft.project_name}</div>
        <div className="nftname">{nft.nft_name}</div>
        <div className="nftnumber">#{nft.nft_id}</div>
        <div className="aboutbutton">
            <button className="button primary">
            <img src={opensealogo} alt='opensea-logo'/>
            <span> <a href='https://opensea.io/' target='_blank'>View on Opensea</a></span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayPanel;
