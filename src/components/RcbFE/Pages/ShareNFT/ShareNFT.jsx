import './ShareNFT.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import {Timeline} from '../../Components/Timeline/Timeline'

import { useNavigate } from 'react-router-dom'
import { useModalStore } from '../../../../App'

import { useEffect, useState } from 'react'

export const ShareNFT = ({plyr}) => {
    const navigate = useNavigate()
    const {setSetC,setSetA,setSetB} = useModalStore()
    useEffect(() => {
        let verification = localStorage.getItem("taskCompleted");
        if (verification === "false" || !verification) {
          navigate("/tasks");
        } else {
        setSetA(true)
        setSetB(true) 
        setSetC(true)
        }
    }, [])
    return (
        <div className='share_nft_container'>
            <Navbar />
            <Timeline all_tasks_complete={true} />
            <h1 className="heading">Here’s your NFT</h1>

            <div className="share_nft_body">
                <div className="share_nft_vid_container shadow">
                    <video src={plyr.vid_url} autoPlay loop muted playsInline></video>
                </div>
                <button onClick={() => 
                    navigate(`/rcb/${localStorage.getItem("PLYR")}`)
                } className="view_nft_btn">View NFT</button>
            </div>
           
            <div className="share_nft_footer">
                <p className="footer_text">Share it to social media</p>
                <div className="social_meadia_handles">
                    <div className="social insta"><i class="fab fa-instagram"></i></div>
                    <div className="social twitter"><i class="fab fa-twitterx"></i></div>
                    <div className="social whatsapp"><i class="fab fa-whatsapp"></i></div>
                </div>
            </div>
            
        </div>
    )
}