import './Wallet.css'
import metamask from '../../static/metamask.svg'
import wallet_connect from '../../static/wallet_connect.svg'

import { useMoralis } from 'react-moralis'
import { useNavigate } from 'react-router-dom'

export const Wallet = ({closeWallet}) => {
       
    const { isAuthenticated, account, authenticate} = useMoralis()
    const navigate  = useNavigate()

    const connect = async () => {
        await authenticate({
            provider: 'walletconnect',
            signingMessage: 'Connect your wallet & Claim you NFT !!',
        })
        await navigate("/share_nft")
    }

       return(
        <div className='wallet_component'>
        <div className="wallet_container">
           <div className="wallet_head">
               <h1 className='wallet_heading'>Connect Wallet</h1>
               <button className='close_wallet_container_btn' onClick={closeWallet}>x</button>
           </div> 
           <div className="wallet_body">
            <p className='wallet_body_note'>*Select your preferable wallet.</p>
            <div className="wallets">
               <div className="wallet meta_mask">
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

           <button className="wallet_body_connect_btn">Connect</button>
           </div>
           <div className="wallet_footer">
               <p className="wallet_footer_note">Haven’t got a crypto wallet yet?</p>
               <button onClick={() => navigate("/tutorial")} className="how2connect_btn">Learn How to Connect</button>
           </div>
           </div>
        </div>
       )  
}