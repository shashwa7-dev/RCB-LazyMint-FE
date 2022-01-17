import React from "react";
import logo from '../../static/media/logo.svg' //img import

//handleCopy Mehtod
const handleCopy = (e, link) => {
    e.preventDefault(); //prevents refresh
    navigator.clipboard.writeText(link);  //copys text to clipboard
    if (window.innerWidth < 991) {
      document.querySelector(".copytext_mobile").style.display = "block";

      setTimeout(() => {
        document.querySelector(".copytext_mobile").style.display = "none";
      }, 1000);
    } else {
      document.querySelector('.btn-txt').innerText = "Copied!"

      setTimeout(() => {
        document.querySelector('.btn-txt').innerHTML = "Copy"
      }, 1000);
    }
  };

function MicroSiteNav({ nft }) {
  return (
    <div>
      <div className="microsite_nav">
        <div className="logo">
          <img src={logo} alt="Dehidden-logo" />
        </div>
      </div>
      <div className="right_nav">
        <div className="linkbar">
          <div className="linkbar_text">
            {nft.url}
          </div>
          <button className="button primary" onClick={(e) =>
              handleCopy(
                e,
                `${nft.url}`
              )
            }>
          <i className="fa fa-copy"></i>
          <span className='btn-txt'>Copy</span>
          </button>
        </div>
        <div
          className="mobile_copy"
          onClick={(e) =>
            handleCopy(e, `${nft.url}`)
          }> <i className="fas fa-copy"></i> </div>
        <div className="copytext_mobile">Copied to Clipboard!</div>
      </div>
    </div>
  );
}

export default MicroSiteNav;
