import styles from "./MainScreen.module.css";
import rcb_logo from "../../static/rcb_logo.svg";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";
import {Timeline} from '../../Components/Timeline/Timeline'
import { useModalStore } from '../../../../App'

export const MainScreen = ({plyr}) => {
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState("");
  const [error,setErrors] = useState(false);

  const navigate = useNavigate();
 const {setA,setSetA} = useModalStore()

  const SendOTP = () => {
    
    axios
      .post("https://rcb-be.herokuapp.com/rcb/enter", {
        email: email,
      })
      .then((res) => {
        if(res?.status === 200) {
          setShowOtpField(true);
          setErrors(false)
        }
        res?.status === 400 && setErrors("Invalid Email")
       
      })
      .catch((err) => {
        setErrors("Invalid Email")
        console.log(err);
      
      });
  };

  const VerifyOTP = () => {
    axios
      .post("https://rcb-be.herokuapp.com/rcb/email-verify", {
        email: email,
        otp: parseInt(otp)
      })
      .then((res) => {

        if(res?.status === 200) {
        setSetA(true)
        localStorage.setItem("email",email);
        localStorage.setItem("verified","true");
        navigate("/tasks");
        }
        res?.status === 400 && setErrors("Invalid OTP")
      })
      .catch((err) => {
        console.log(err);
        setErrors("Invalid OTP")
      
      });
  };
  return (
    <div className={styles.Mainscreen}>
                <Navbar />
                <Timeline stage_id={1} stage_complete_status={setA}/>
                <div className={styles.content_container}>
                    <div className={styles.main_nft_display}>
                        <video src={plyr.vid_url} autoPlay loop muted playsInline></video>
                    </div>

                    <div className={styles.main_content}>
                    <img src={rcb_logo} alt="" className={styles.logo_content} />
                        <h1>Get a chance to win a 
        RCB NFT Card</h1>
                        <p>
                        Follow the steps below to redeem an exclusive NFT card of your favourite RCB players
                        </p>  
        {showOtpField ?  (
            <>
              <div className="inputFl_container"  style={{color:"black"}}>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  autoFocus
                  inputStyle={{
                    fontSize: "4.5rem",
                    fontWeight: "bold",
                  }}
                  OTPLength={4}
                  otpType="number"
                  disabled={false}
                  secure={false}
                />
            <div class={styles.otp_blocks_container}>
            <button 
                  className={styles.submitOtp}
                  onClick={() => {
                    otp.length >= 4 ? VerifyOTP() : setErrors("Enter OTP")
                  }}
                >
                  Verify
                </button>
                </div>
              </div>
            </>
          ) : (
            <>
            <div className={styles.inputFl_container}>
            <input 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className={`${styles.roundBox} ${styles.input}`} placeholder='Verify Email' 
             type={"email"}
             required/> 
            <button  onClick={() => {
                    email?.length > 0 ? SendOTP() : setErrors("Enter Email");
                  }}>Send OTP</button>
             </div>
            </>
          )}
          {error && 
          <div style={{display:"flex",color:"white"}} className="error">
          <i style={{color:"white",marginTop:"20px"}} className="fa fa-exclamation-circle fa-1x" aria-hidden="true"></i>
          <p>{error}</p>
          </div>
          }
        </div>
      </div>
    </div>
  );
};