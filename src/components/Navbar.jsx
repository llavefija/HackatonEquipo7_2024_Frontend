import bcn from "../bcn.png";
import "../navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
      <div className="navbar bg-accent">
       <Link to="/home">
        <img src={bcn} className="logo" alt="Barcelona" />
        <h1 className="text-xl text-white"> <strong>CrowdMap</strong></h1>
       </Link> 
      </div>
  )
}

export default Navbar;