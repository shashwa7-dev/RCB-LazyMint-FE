import './ShareNFT.css'

export const ShareNFT = ({plyr}) => {
    return (
        <div className='share_nft_container'>
            <h1 className="headin">Here’s your NFT</h1>

            <div className="share_nft_body">
                <div className="nft_vid_container">
                    <video src={plyr.vid_url} autoPlay loop muted playsInline></video>
                </div>
                <button className="view_nft_btn">View NFT</button>
            </div>
           
            <div className="share_nft_footer">
                <p className="footer_text">Share it to social media</p>
                <div className="social_meadia_handles">
                    <div className="social insta"><i class="fab fa-instagram"></i></div>
                    <div className="social twitter"><i class="fab fa-twitter-square"></i></div>
                    <div className="social fb"><i class="fab fa-facebook"></i></div>
                </div>
            </div>
            
        </div>
    )
}
