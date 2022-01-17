import styles from './Navbar.module.css'
import logo from '../../static/logo.svg'
import rcb_logo from '../../static/rcb_logo.svg'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <img src={logo} alt="" className={styles.logo} />
           <img src={rcb_logo} alt="" className={styles.logo} />
        </div>
    )
}
