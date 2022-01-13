import './Wallet.css'
import metamask from '../../static/metamask.svg'
import coinbase from '../../static/coinbase.svg' 
import bitski from '../../static/bitski.svg'
import portis from '../../static/potris.svg'
import wallet_connect from '../../static/wallet_connect.svg'
import Torus from '../../static/Torus.svg'

import { useMoralis } from 'react-moralis'

export const Wallet = () => {

    const { isAuthenticated, account, authenticate} = useMoralis()
    
    const connect = async () => {
        await authenticate({
            provider: 'walletconnect',
            signingMessage: 'Connect your wallet & Claim you NFT !!',
        })
    }

    return (
        <div className='wallet_component'>
        <div className="wallet_container">
           <div className="wallet_head">
               <h1 className='wallet_heading'>Connect Wallet</h1>
               <button className='close_wallet_container_btn'>x</button>
           </div> 
           <div className="wallet_body">
            <p className='wallet_body_note'>*Select your preferable wallet.</p>
            <div className="wallets">
               <div className="wallet meta_mask">
                <img src={metamask}className="walletImg" />
                   <p className="walletName">Meta Mask</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
               <div className="wallet coinbase">
               <img src={coinbase}className="walletImg" />
                   <p className="walletName">Coinebase</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
               <div className="wallet portis">
               <img src={portis}className="walletImg" />
                   <p className="walletName">Portis</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
               <div className="wallet bitski">
               <img src={bitski}className="walletImg" />
                   <p className="walletName">Bitski</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
               <div className="wallet torus" onClick={connect}>
               <img src={wallet_connect} className="walletImg" />
                   <p className="walletName">Wallet Connect</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
               <div className="wallet wallet_connect" >
               <img src={Torus}className="walletImg" />
                   <p className="walletName">Torus</p>
                   <span className="chevron"><i class="fas fa-chevron-right"></i></span>
               </div>
           </div>

           <button className="wallet_body_connect_btn">Connect</button>
           </div>
           <div className="wallet_footer">
               <p className="wallet_footer_note">Haven’t got a crypto wallet yet?</p>
               <button className="how2connect_btn">Learn How to Connect</button>
           </div>
           </div>
        </div>
    )
}
