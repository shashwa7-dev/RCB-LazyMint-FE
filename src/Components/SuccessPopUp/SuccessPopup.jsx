import { useState } from 'react/cjs/react.development'
import './SuccessPopup.css'

export const SuccessPopup = () => {
    /* Popup close logic */
    const [closePopup, setClosePopUp] = useState(false)

    return (
        !closePopup ? (
        <div className="success_popup_container"> 
            <div className="popup_body">
                <h1 className="popup_heading">Success !</h1>
                <p className="popup_text">Your NFT has been added to 
    your wallet</p>
                <button className="popup_btn" onClick={() => setClosePopUp(true)}>OK</button>
            </div>        
        </div>) : ''
    )
}