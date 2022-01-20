import "./MainScreen.css";
import rcb_logo from "../../static/rcb_logo.svg";
import data from "../../../../data/rcb_players.json"
import { Navbar } from "../../Components/Navbar/Navbar";
import { useState } from "react";

import axios from "axios";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";

import {Timeline} from '../../Components/Timeline/Timeline'
import { useModalStore } from '../../../../App'


import GoogleLogin from 'react-google-login';

export const MainScreen = () => {
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
        navigate("/auth/tasks");
        }
        res?.status === 400 && setErrors("Invalid OTP")
      })
      .catch((err) => {
        console.log(err);
        setErrors("Invalid OTP")
      
      });
  };

  const login = async (code) => {
    return fetch('https://rcb-be.herokuapp.com/rcb/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    });
  };

  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await login(authResult['code']);
         console.log(result)
        if (result) {
          console.log(result?.msg)
          localStorage.setItem("email",result?.msg);
          localStorage.setItem("verified","true");
          navigate("/auth/tasks");
        }
      } else {
        throw new Error(authResult);
      }
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className="Mainscreen">
      <Navbar />
      <Timeline stage_id={1} stage_complete_status={setA}/>
      <div className="content_container">
        <div className="main_nft_display">
          <video src={data[0].vid_url} autoPlay loop muted playsInline></video>
        </div>

        <div className="main_content">
          <img src={rcb_logo} alt="" className="logo_content" />
          <h1>Get a chance to win a RCB NFT Card</h1>
          <p>
           Follow the steps below to redeem an exclusive NFT card of your favourite RCB players
          </p>
    
          {/* {showOtpField ? (
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
            <div className="otp_blocks_container">
                <button
                  className="submitOtp"
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
              <div className="inputFl_container">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="roundBox input"
                  placeholder="Verify Email"
                  type={"email"}
                  required
                />
                <button
                  onClick={() => {
                    email?.length > 0 ? SendOTP() : setErrors("Enter Email");
                  }}
                >
                  Send OTP
                </button>
              </div>
            </>
          )} */}
            <GoogleLogin
        // use your client id here
        clientId={'930945739796-153247bqh3klvidel19qu7lvrpsrv50h.apps.googleusercontent.com'}
        buttonText="Login with google"
        responseType="code"
        /**
         * To get access_token and refresh_token in server side,
         * the data for redirect_uri should be postmessage.
         * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
         */
        redirectUri="postmessage"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
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