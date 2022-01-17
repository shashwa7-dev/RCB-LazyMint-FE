import styles from './How2Connect.module.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useState } from 'react/cjs/react.development'
import { Wallet } from '../../Components/Wallet/Wallet'
import {useRef } from 'react'
import {Link} from 'react-router-dom'

export const How2Connect = () => {
    const [showWallet, setShowWallet] = useState(false)
    let walletRef = useRef(null)
    return (
        <div className={styles.how2connect}>
            <Navbar />
            {/* close wallet logic */}
            {showWallet ? <Wallet forwardedRef={walletRef} closeWallet={() => setShowWallet(false)} setShowWallet={setShowWallet}/>:''}
            <div className={styles.how2connect_container}>
            <h1 className={styles.heading}>Steps to Setup a Wallet</h1>
            <div className={styles.how2connect_body}>
                <ol className={styles.steps}>
                    <li className={`${styles.step} ${styles.step1}`}>
                        Install Metamask from below by visiting <a href='https://metamask.io' target="_blank" className={styles.imp_link}>metamask.io</a>  or below <a href='https://metamask.app.link/bxwkE8oF99' target="_blank" className={styles.imp_link}>https://metamask.app.link/bxwkE8oF99</a>
                    </li>
                    <li className={`${styles.step} ${styles.step2}`}>
                        Setup your Login password
                    </li>
                    <li className={`${styles.step} ${styles.step3}`}>
                        Setup your Account and Secure your SeedPhrase Backup and Keep it securely copied
                    </li>
                </ol>    
            </div>
            <div className={styles.how2Connect_footer}>
                <p className={styles.final_note}>
                    Now just click connect button below or use link we sent in Email to connect your wallet and claim NFT
                </p>
                <button className={styles.connect_wallet} onClick={() => setShowWallet(true)} >Connect Wallet</button>
                <Link to='/claim_nft'><button className={`${styles.go_back_btn} ${styles.floating_gbk_btn }`}> <i class="fas fa-chevron-circle-left"></i></button></Link>
            </div>
         </div>

       
        </div>
    )
}
