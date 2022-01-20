import { Link } from "react-router-dom"
import logo from '../static/media/logo.svg'

const NotFound = () => {
  return (
    <div className="not-found" style={{backgroundColor:'dark-gray', height:'100vh', width:'100vw', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', magin:'auto',fontSize:"2.5rem", fontFamily:'monospace', color:'wheat'}}>
      <img src={logo} alt='dehidden_logo' style={{width:'20rem'}}/>
      <h2>Sorry :(</h2>
      <p>Wrong Route!</p>
      <Link to="/rcb/1">
       <button style={{padding:"1rem", outline: 'none', borderRadius: '5px', fontSize:'1rem', fontWeight:'bold',  backgroundColor:'wheat',fontFamily:'monospace', text:'black'}}>Redirect to our Microsite!</button> 
      </Link>
    </div>
  );
}
 
export default NotFound;