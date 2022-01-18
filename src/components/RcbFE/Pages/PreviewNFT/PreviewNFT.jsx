import './PreviewNFT.css'
import { useMoralis } from 'react-moralis'
import { Navbar } from '../../Components/Navbar/Navbar'
import {Timeline} from '../../Components/Timeline/Timeline'
import { useEffect, useState } from 'react'
import { Wallet } from '../../Components/Wallet/Wallet'

import { useModalStore } from '../../../../App'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

export const PreviewNFT = ({plyr}) => {

    const [showWallet, setShowWallet] = useState(false)
    const [walletConnected, setWalletConnected] = useState(false)

    const { account, web3, isWeb3Enabled, enableWeb3, Moralis } = useMoralis()
    const {setSetA,setSetB,setError} = useModalStore()
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

    const claimNft = async () => {
        setShowWallet(true)
        console.log(account)
        /*
            const res = await Moralis.Plugins.rarible.lazyMint({
                chain: 'eth',
                userAddress: account,
                tokenType: 'ERC721',
                tokenUri: 'ipfs://'
            })
         */
    }
    useEffect(() => {
        {/* wallet integration logic goes here  */}
    },[walletConnected])
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
                       claimNft()
                       setError(false)
                    }}>Connect & Claim NFT</button>
                    <p className='footer_note'>*Please connect your wallet to get the NFT</p>
                </div>
            </div>

            {/* close wallet logic */}
            {showWallet ? <Wallet closeWallet={() => setShowWallet(false)}/>:''}

        </div>
    )
}