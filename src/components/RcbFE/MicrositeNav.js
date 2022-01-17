import React from "react";
import logo from '../../static/media/logo.svg' //img import
import config from './config/index'

//handleCopy Mehtod
const handleCopy = (e, link) => {
    e.preventDefault(); //prevents refresh
    navigator.clipboard.writeText(link);  //copys text to clipboard
    if (window.innerWidth < 991) {
      document.querySelector(".rcb_copytext_mobile").style.display = "block";

      setTimeout(() => {
        document.querySelector(".rcb_copytext_mobile").style.display = "none";
      }, 1000);
    } else {
      document.querySelector('.rcb_btn_txt').innerText = "Copied!"

      setTimeout(() => {
        document.querySelector('.rcb_btn_txt').innerHTML = "Copy"
      }, 1000);
    }
  };

function MicroSiteNav({plyr, styles}) {
  return (
    <div>
      <div className={styles.rcb_microsite_nav}>
        <div className={styles.rcb_logo}>
          <img src={logo} alt="Dehidden-logo" />
        </div>
      </div>
      <div className={styles.rcb_right_nav}>
        <div className={styles.rcb_linkbar}>
          <div className={styles.rcb_linkbar_text}>
           https://verify.dehidden.com/rcb/
          </div>
          <button className={`${styles.rcb_button} ${styles.rcb_primary}`} onClick={(e) =>
              handleCopy(
                e,
                `${config.baseUrl}/rcb/${plyr.plyr_name_id}`
              )
            }>
          <i class='fa fa-copy'></i>
          <span className={styles.rcb_btn_txt}>Copy</span>
          </button>
        </div>
        <div
          className={`${styles.rcb_mobile_copy} ${styles.rcb_primary}`}
          onClick={(e) =>
            handleCopy(e, `${config.baseUrl}/rcb/${plyr.plyr_name_id}`)
          }> <i class='fa fa-copy'></i> </div>
        <div className={styles.rcb_copytext_mobile}>Copied to Clipboard!</div>
      </div>
    </div>
  );
}

export default MicroSiteNav;
