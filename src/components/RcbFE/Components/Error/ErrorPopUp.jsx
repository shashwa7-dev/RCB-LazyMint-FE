
import "./ErrorPopUp.css";


import { useModalStore } from "../../../../App";

export const ErrorPopUp = () => {
  /* Popup close logic */
  const {setError,error} = useModalStore()

  return error ? (
    <div className="success_popup_container">
      <div className="popup_body">
        <h1 className="popup_heading">Error</h1>
        <p className="popup_text">Something went wrong</p>
        <button
          className="popup_btn"
          onClick={() => {
            setError(true);
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