import './Navbar.css'
import logo from '../../static/logo.svg'
import rcb_logo from '../../static/rcb_logo.svg'

export const Navbar = () => {
    return (
        <div className='navbar'>
           <img src={logo} alt="" className="logo" />
           <img src={rcb_logo} alt="" className="logo" />
        </div>
    )
}
