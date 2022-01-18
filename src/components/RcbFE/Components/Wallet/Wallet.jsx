import './Wallet.css'
import metamask from '../../static/metamask.svg'
import wallet_connect from '../../static/wallet_connect.svg'

import { useMoralis } from 'react-moralis'
import { useNavigate,useLocation } from 'react-router-dom'

import { SuccessPopup } from '../SuccessPopUp/SuccessPopup'
import { useState } from 'react'

import axios from 'axios'
import { ErrorPopUp } from '../Error/ErrorPopUp'


import { useModalStore } from '../../../../App'
export const Wallet = ({closeWallet}) => {
       
    const [walletId,setWalletId] = useState(null)
    const { isAuthenticated, account, authenticate} = useMoralis()
    const navigate  = useNavigate()
    const location = useLocation()
    const [showSuccess, setShowSuccess] = useState(false)
    const {error,setErrorTrue} = useModalStore()

    const WalletPost = async () => {
        axios
          .post("https://rcb-be.herokuapp.com/rcb/wallet", {
            email: localStorage.getItem("email"),
            wallet: walletId
          })
          .then((res) => {
            console.log(res);
            setShowSuccess(true)
          })
          .catch((err) => {
            console.log(err);
            setErrorTrue(true)
          });
      };



    const connect = async () => {
        await authenticate({
            provider: 'walletconnect',
            signingMessage: 'Connect your wallet & Claim you NFT !!',
        })
        console.log(isAuthenticated)
        if(isAuthenticated) {
            setWalletId(account)
            WalletPost()
        }
      

    }

    const MetaMaskConnect = async() => {await authenticate({
        provider: 'metamask',
        signingMessage: 'Connect your wallet & Claim you NFT !!',
    })
    console.log(isAuthenticated)
    console.log(account)
    if(isAuthenticated) {
        setWalletId(account)
        WalletPost()
    }
}



    const walletClose = () => {
        if(location.pathname === '/auth/claim_nft'){
            navigate('/auth/tutorial')
        } else {
           closeWallet()
        }
    }
       return(
        <>
        { error ? <ErrorPopUp/> : 
        showSuccess ? <SuccessPopup/> :
        <div className='wallet_component'>
        <div className="wallet_container">
           <div className="wallet_head">
               <h1 className='wallet_heading'>Connect Wallet</h1>
               <button className='close_wallet_container_btn' onClick={closeWallet}>x</button>
           </div> 
           <div className="wallet_body">
            <p className='wallet_body_note'>*Select your preferable wallet.</p>
            <div className="wallets">
               <div className="wallet meta_mask"  onClick={MetaMaskConnect}>
                <img src={metamask}className="walletImg" />
                   <p className="walletName">Meta Mask</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
               <div className="wallet wallet_connect" onClick={connect}>
               <img src={wallet_connect}className="walletImg" />
                   <p className="walletName">Wallet Connect</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
           </div>

           </div>
           <div className="wallet_footer">
               <p className="wallet_footer_note">Haven’t got a crypto wallet yet?</p>
               <button onClick={() => walletClose()} className="how2connect_btn">Learn How to Connect</button>
           </div>
           </div>
        </div> }
        </>
       )  
}
