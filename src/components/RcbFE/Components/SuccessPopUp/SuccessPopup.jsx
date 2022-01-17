import { useState } from 'react'
import styles from './SuccessPopup.module.css'
import { useNavigate } from 'react-router-dom'


export const SuccessPopup = () => {
    const navigate  = useNavigate()
    /* Popup close logic */
    const [closePopup, setClosePopUp] = useState(false)

    return (
            !closePopup ? (
            <div className={styles.success_popup_container}> 
                <div className={styles.popup_body}>
                    <h1 className={styles.popup_heading}>Success !</h1>
                    <p className={styles.popup_text}>Your NFT has been added to 
        your wallet</p>
                    <button className={styles.popup_btn} onClick={() => navigate("/share_nft")}>OK</button>
                </div>        
            </div>) : ''
        )
}
