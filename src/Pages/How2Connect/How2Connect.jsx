import './How2Connect.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useState } from 'react/cjs/react.development'
import { Wallet } from '../../Components/Wallet/Wallet'

export const How2Connect = () => {
    const [showWallet, setShowWallet] = useState(false)

    return (
        <div className="how2connect">
            <Navbar />
            {/* close wallet logic */}
            {showWallet ? <Wallet closeWallet={() => setShowWallet(false)}/>:''}
            <div className="how2connect_container">
            <h1 className="heading">Steps to Setup a Wallet</h1>
            <div className="how2connect_body">
                <ol className="steps">
                    <li className="step step1">
                        Install Metamask from below by visiting <a href='https://metamask.io' target="_blank" className="imp_link">metamask.io</a>  or below <a href='https://metamask.app.link/bxwkE8oF99' target="_blank" className="imp_link">https://metamask.app.link/bxwkE8oF99</a>
                    </li>
                    <li className="step step2">
                        Setup your Login password
                    </li>
                    <li className="step step3">
                        Setup your Account and Secure your SeedPhrase Backup and Keep it securely copied
                    </li>
                </ol>    
            </div>
            <div className="how2Connect_footer">
                <p className="final_note">
                    Now just click connect button below or use link we sent in Email to connect your wallet and claim NFT
                </p>
                <button className="connect_wallet" onClick={() => setShowWallet(true)} >Connect Wallet</button>
            </div>
         </div>

       
        </div>
    )
}
