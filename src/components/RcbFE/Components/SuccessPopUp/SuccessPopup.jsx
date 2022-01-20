import { useState } from "react";
import "./SuccessPopup.css";

import { useNavigate } from "react-router-dom";

export const SuccessPopup = () => {
  const navigate = useNavigate();
  /* Popup close logic */
  const [closePopup, setClosePopUp] = useState(false);

  return !closePopup ? (
    <div className="success_popup_container">
      <div className="popup_body">
        <h1 className="popup_heading">Success !</h1>
        <p className="popup_text">Your NFT has been added to your wallet</p>
        <button
          className="popup_btn"
          onClick={() => {
            localStorage.setItem("claimed_nft", "true");
            navigate("/auth/share_nft");
          }}
        >
          OK
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};