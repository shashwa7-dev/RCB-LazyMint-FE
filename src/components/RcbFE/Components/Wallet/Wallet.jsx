import styles from './Wallet.module.css'
import metamask from '../../static/metamask.svg'
import wallet_connect from '../../static/wallet_connect.svg'

import { useMoralis } from 'react-moralis'
import { useNavigate,useLocation } from 'react-router-dom'

import { SuccessPopup } from '../SuccessPopUp/SuccessPopup'
import { useState, useEffect } from 'react'

export const Wallet = ({closeWallet,forwardedRef,setShowWallet}) => {
       
useEffect(() => {
    document.addEventListener('mousedown',(event) => {
        if(forwardedRef.current && !forwardedRef.current.contains(event.target))
            setShowWallet(false)
    })
    console.log(forwardedRef.current, 'forwareded ref from parent!')
}, [])

    const { isAuthenticated, account, authenticate} = useMoralis()
    const navigate  = useNavigate()
    const location = useLocation()
    const [showSuccess, setShowSuccess] = useState(false)

    const connect = async () => {
        await authenticate({
            provider: 'walletconnect',
            signingMessage: 'Connect your wallet & Claim you NFT !!',
        })
       
    }

    const walletClose = () => {
        if(location.pathname === '/claim_nft'){
            navigate('/tutorial')
        } else {
           closeWallet()
        }
    }
       return(
        <>
        {showSuccess ? <SuccessPopup/> :
    
        <div className={styles.wallet_component}>
        <div ref={forwardedRef} className={styles.wallet_container}>
           <div className={styles.wallet_head}>
               <h1 className={styles.wallet_heading}>Connect Wallet</h1>
               <button className={styles.close_wallet_container_btn} onClick={closeWallet}><i class="fas fa-times"></i></button>
           </div> 
           <div className={styles.wallet_body}>
            <p className={styles.wallet_body_note}>*Select your preferable wallet.</p>
            <div className={styles.wallets}>
               <div className={`${styles.wallet} ${styles.meta_mask}`}>
                <img src={metamask}className={styles.walletImg} />
                   <p className={styles.walletName}>Meta Mask</p>
                   <span className={styles.chevron}><i class="fas fa-chevron-right"></i></span>
               </div>
               <div className={`${styles.wallet} ${styles.wallet_connect}`} onClick={connect}>
               <img src={wallet_connect}className={styles.walletImg} />
                   <p className={styles.walletName}>Wallet Connect</p>
                   <span className={styles.chevron}><i class="fas fa-chevron-right"></i></span>
               </div>
           </div>
           </div>
           <div className={styles.wallet_footer}>
               <p className={styles.wallet_footer_note}>Haven’t got a crypto wallet yet?</p>
               <button className={styles.how2connect_btn} onClick={() => walletClose()} >Learn How to Connect</button>
           </div>
           </div>
        </div>
    }
        </>
       )  
}