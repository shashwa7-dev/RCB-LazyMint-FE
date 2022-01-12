import './How2Connect.css'
export const How2Connect = () => {
    return (
        <div className="how2connect_container">
            <div className="how2connect_popup">
                <p className="popup_text">Hurray! You have succesfully completed the Tasks and we have Reserved an NFT for you </p>
                <button className="close_popup">x</button>
            </div>
            <h1 className="heading">Steps to Setup a Wallet</h1>
            <div className="how2connect_body">
                <p className="step1">
                    Install Metamask from below by visiting metamask.io or below https://metamask.app.link/bxwkE8oF99
                </p>
                <p className="step2">
                     Setup your Login password
                </p>
                <p className="step3">
                    Setup your Account and Secure your SeedPhrase Backup and Keep it securely copied
                </p>
                <p className="final_note">
                    Now just click connect button below or use link we sent in Email to connect your wallet and claim NFT
                </p>
            </div>
            <button className="connect_wallet">Connect Wallet</button>
        </div>
    )
}
