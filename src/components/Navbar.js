import React from 'react'
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Sweet Cakes</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Cakes</Link></li>
                        <li><Link to="/cart">My Cart</Link></li>
                        <li><Link to="/cart">Register</Link></li>
                        <li><Link to="/Login">Login</Link></li>                    
                        <li><Link to="/cart">Admin</Link></li>                    
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar