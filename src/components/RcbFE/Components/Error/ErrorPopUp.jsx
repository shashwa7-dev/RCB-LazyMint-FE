import { useState } from "react";
import "./ErrorPopUp.css";

import { useNavigate } from "react-router-dom";

export const ErrorPopUp = () => {
  const navigate = useNavigate();
  /* Popup close logic */
  const [closePopup, setClosePopUp] = useState(false);

  return !closePopup ? (
    <div className="success_popup_container">
      <div className="popup_body">
        <h1 className="popup_heading">Error</h1>
        <p className="popup_text">Something went wrong</p>
        <button
          className="popup_btn"
          onClick={() => {
            setClosePopUp(true);
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