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
      document.querySelector('.btn_txt').innerText = "Copied!"

      setTimeout(() => {
        document.querySelector('.btn_txt').innerHTML = "Copy"
      }, 1000);
    }
  };

function MicroSiteNav({ nft, styles }) {
  return (
    <div>
      <div className={styles.microsite_nav}>
        <div className={styles.logo}>
          <img src={logo} alt="Dehidden-logo" />
        </div>
      </div>
      <div className={styles.right_nav}>
        <div className={styles.linkbar}>
          <div className={styles.linkbar_text}>
            {nft.url}
          </div>
          <button className={`${styles.button} ${styles.primary}`} onClick={(e) =>
              handleCopy(
                e,
                `${nft.url}`
              )
            }>
          <i class="fa fa-copy"></i>
          <span className={styles.btn_txt}>Copy</span>
          </button>
        </div>
        <div
          className={styles.mobile_copy}
          onClick={(e) =>
            handleCopy(e, `${nft.url}`)
          }> <i class="fas fa-copy"></i> </div>
        <div className={styles.copytext_mobile}>Copied to Clipboard!</div>
      </div>
    </div>
  );
}

export default MicroSiteNav;
