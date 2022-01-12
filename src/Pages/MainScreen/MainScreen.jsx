import './MainScreen.css'
import logo from '../../static/logo.svg'
import rcb_logo from '../../static/rcb_logo.svg'
import data from '../../data/rcb_players.json'
import { Navbar } from '../../Components/Navbar/Navbar'
import {useState} from 'react'


const InputFldWithBtn = ({showOtpField}) =>{
    return(
        <div class='inputFl_container'>
            <input className='roundBox input' placeholder='Verify Email' required/> 
            <button onClick={() => showOtpField(true)}>Send OTP</button>
        </div>
    )
}

const OtpBlocks = () =>{
    return(
        <div class='otp_blocks_container'>
            <input type="text" className="otp_digit d1" required autoFocus maxlength="1" />
            <input type="text" className="otp_digit d2" required maxlength="1"/>
            <input type="text" className="otp_digit d3" required maxlength="1"/>
            <input type="text" className="otp_digit d4" required maxlength="1"/>
            <button className='submitOtp'>Verify</button>
        </div>
    )
}
export const MainScreen = () => {
    const [showOtpField, setShowOtpField] = useState(false)

    return (
        <div className="Mainscreen">
                <Navbar />
                <div className='content_container'>
                    <div className='main_nft_display'>
                        <video src={data[0].vid_url} autoPlay loop muted playsInline></video>
                    </div>

                    <div className='main_content'>
                    <img src={rcb_logo} alt="" className="logo_content" />
                        <h1>Get a chance to win a 
        RCB NFT Card</h1>
                        <p>
                        some more information about the giveaway some more information about the giveaway 
                        </p>  
                        {showOtpField ?  <OtpBlocks /> : <InputFldWithBtn showOtpField = {setShowOtpField}/> }
                    </div>
                </div>
        </div>
    )
}
