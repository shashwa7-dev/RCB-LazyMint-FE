import './PreviewNFT.css'
import { useEthers } from '@usedapp/core'
import { Navbar } from '../../Components/Navbar/Navbar'
import {Timeline} from '../../Components/Timeline/Timeline'
import { useEffect, useState } from 'react'
import { Wallet } from '../../Components/Wallet/Wallet'

import { useModalStore } from '../../../../App'
import { useNavigate } from 'react-router-dom'
import { ErrorPopUp } from '../../Components/Error/ErrorPopUp'

import axios from 'axios'
import { SuccessPopup } from '../../Components/SuccessPopUp/SuccessPopup'

export const PreviewNFT = ({plyr}) => {

    const [showWallet, setShowWallet] = useState(false)

    const [success, setSuccess] = useState(false)

    const { activateBrowserWallet, active, account, library, chainId } = useEthers()
    const {setSetA,setSetB,setErrorTrue,error} = useModalStore()
    const navigate = useNavigate()
    
    useEffect(() => {
        let verification = localStorage.getItem("taskCompleted");
        axios
        .post("https://rcb-be.herokuapp.com/rcb/status", {
          email: localStorage.getItem("email"),
        }).then((res) => {
            const {
                WalletAddress
              } = res.data?.user;
              if((WalletAddress !== "false" || WalletAddress !== "null") && WalletAddress.length > 10) {
                localStorage.setItem("wallet",WalletAddress);
                localStorage.setItem("taskCompleted", "true");
                navigate("/auth/share_nft")
              }
            }).catch((err) => {
                console.log(err);
            })

        if (verification === "false" || !verification) {
          navigate("/auth/tasks");
        } else {
        setSetA(true)
        setSetB(true) 
        }
    }, [])

  

    console.log(error)
    const WalletPost = async () => {
        axios
          .post("https://rcb-be.herokuapp.com/rcb/wallet", {
            email: localStorage.getItem("email"),
            wallet: account
          })
          .then((res) => {
            console.log(res);
            setSuccess(true)
          })
          .catch((err) => {
            console.log(err);
            setErrorTrue(true)
          });
      };

    const signNft = async () => {
        const domain = {
            name: 'RCB NFT',
            version: '1',
            chainId
        }
        const types = {
            Person: [
                { name: 'name', type: 'string' },
                { name: 'wallet', type: 'address' }
            ],
            Mail: [
                { name: 'from', type: 'Person' },
                { name: 'contents', type: 'string' }
            ]
        }
        const value = {
            from : {
                name: 'Namma RCB',
                wallet: account
            },
            contents: 'Enjoy your RCB NFT'
        }
        const signer = library.getSigner()
        try {
            const signedTx = await signer._signTypedData(domain, types, value)
            console.log(signedTx)
            WalletPost()
        }
        catch(err){
            console.log(err)
            setErrorTrue(true)
        }
    }

    return (
        <div className='preview_nft_container'>
            <Navbar />
            <Timeline stage_id={3} stage_complete_status={true}/>    
            <div className="preview_nft_body">
                <div className="container_heading">Here’s your NFT</div>
                <div className="nft_vid_container">
                    <video src={plyr.vid_url} autoPlay loop muted playsInline className='shadow'></video>
                </div>
                <div className="claim_nft_btn_container">
                    <button className="claim_nft_btn" onClick={() => {
                       !active ? setShowWallet(true) : signNft()     
                    }}>  { active ? 'Claim NFT' : 'Connect Wallet'}</button>
                 {
                        !active ? 
                        <p className="footer_note">
                            *Please connect your wallet to get the NFT
                        </p> :
                        <strong className="footer_note" style={{display: 'block'}}>
                            Connected as: {account.slice(0,9)}...{account.slice(-9)}
                        </strong>
                    }
                </div>
            </div>

             
             {error &&  <ErrorPopUp />}
             {success &&  <SuccessPopup/>}
            {/* close wallet logic */}
            {
                showWallet && 
                (
                    !active &&
                    <Wallet 
                        closeWallet={() => setShowWallet(false)} 
                        setShowWallet={setShowWallet}
                    /> 
                )
            }

        </div>
    )
}