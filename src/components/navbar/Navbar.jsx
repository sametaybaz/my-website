import "./navbar.scss"
import { Home } from "@material-ui/icons"

function Navbar({setMenuOpen , menuOpen }) {
  return (
   
   <div className='navbar' id="navbar">

      <div className="logo-container"> 
       <h2>Samedya</h2>
      </div>

     
      <div 
      className={"hamburger " + (menuOpen && "active")}
      onClick = {()=> setMenuOpen(!menuOpen)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>


      <a href="#header" className="home"><Home className="logo"></Home></a>

    </div>


  )
}

export default Navbar