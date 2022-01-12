import './Wallet.css'

export const Wallet = () => {
    return (
        <div className="wallet_container">
           <div className="wallet_head">
               <h1 className='wallet_heading'></h1>
               <button className='close_wallet_container'>x</button>
           </div> 
           <div className="wallet_body">
            <p className='wallet_body_note'></p>
            <div className="wallets">
               <div className="wallet meta_mask"></div>
               <div className="wallet coinbase"></div>
               <div className="wallet portis"></div>
               <div className="wallet bitski"></div>
               <div className="wallet torus"></div>
               <div className="wallet wallet_connect"></div>
           </div>
           </div>
           <div className="wallet_footer">
               <p className="wallet_footer_note"></p>
               <button className="how2connect_btn"></button>
           </div>
           
        </div>
    )
}
