import React from "react";
import opensealogo from '../../static/media/opensealogo.svg'

function DisplayPanel({ plyr }) {
  return (
    <div className="rcb_nftdisplay">
      <div className="rcb_nftdisplay_container">
        <div className="rcb_nftdisplay_nft">
          <video src={plyr.vid_url} autoPlay loop muted playsInline></video>
        </div>
        <div className="rcb_nftname">{plyr.player_name}</div>
        <div className="rcb_nftnumber">#{plyr.plyr_id}</div>
        <div className="rcb_aboutbutton">
            <button className="rcb_button rcb_primary">
            <img src={opensealogo} alt='opensea-logo'/>
            <span> <a href='https://opensea.io/' target='_blank'>View NFT</a></span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayPanel;
