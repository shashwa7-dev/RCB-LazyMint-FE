import './PreviewNFT.css'
export const PreviewNFT = ({plyr}) => {
    return (
        <div className='preview_nft_container'>
            <div className="task_complete_popup">
                <p className="popup_content">Thanks for completing the task link your wallet and claim your NFT</p>
                <button className="close_popup">x</button>
            </div>
            <div className="container_heading">Here’s your NFT</div>
            <div className="nft_vid_container">
                <video src={plyr.vid_url} autoPlay loop muted playsInline></video>
            </div>
            <div className="claim_nft_btn_container">
                <button className="claim_nft_btn">Connect & Claim NFT</button>
                <p className='footer_note'>*Please connect your wallet to get the NFT</p>
            </div>
        </div>
    )
}
