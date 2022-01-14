import './MainScreen.css'
import rcb_logo from '../../static/rcb_logo.svg'
import { Navbar } from '../../Components/Navbar/Navbar'
import {useState} from 'react'
import {Timeline} from '../../Components/Timeline/Timeline'
import { useEffect } from 'react'

const InputFldWithBtn = ({showOtpField}) =>{
    return(
        <div className='inputFl_container .rounded-corners-gradient-borders '>
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
export const MainScreen = ({plyr}) => {
    const [showOtpField, setShowOtpField] = useState(false)
    const[taskComplete, setTaskComplete] = useState(false)

    //task complete logic goes here 
    useEffect(() => {
        if(showOtpField)
            setTaskComplete(true)
    },[showOtpField])

    return (
        <div className="Mainscreen">
                <Navbar />
                <Timeline stage_id={1} stage_complete_status={taskComplete}/>
                <div className='content_container'>
                    <div className='main_nft_display'>
                        <video src={plyr.vid_url} autoPlay loop muted playsInline></video>
                    </div>

                    <div className='main_content'>
                    <img src={rcb_logo} alt="" className="logo_content" />
                        <h1>Get a chance to win a 
        RCB NFT Card</h1>
                        <p>
                        Follow the steps below to redeem an exclusive NFT card of your favourite RCB players
                        </p>  
                        {showOtpField ?  <OtpBlocks />  : <InputFldWithBtn showOtpField = {setShowOtpField}/> }
                    </div>
                </div>
        </div>
    )
}
