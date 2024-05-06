import logo from './Images/logo-fond-vert.png';
import {Link} from "react-router-dom";

export default function header (){
  return (
    <header>

    <Link to="/" className="logo">
      <img src={logo} alt="Logo" />
    </Link>

    <nav>
      <Link to="/login">Login</Link>   
    </nav>

  </header>
);}