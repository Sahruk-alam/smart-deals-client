import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {

    const {user,signOutInfo}=use(AuthContext);
    const links= <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/allproducts">All Products</NavLink></li>
    {
        user && <> 
        <li><NavLink to="/myproducts">My Products</NavLink></li>
        <li><NavLink to="/mybids">Bids</NavLink></li>
        <li><NavLink to="/createproduct">Create Product</NavLink></li>
        </>
        }
    </>
    const handleSignOut=()=>{
        signOutInfo()
        .then(() => {
           console.log("Sign out successful.")
          })
        .catch((error) => {
            console.error("Error signing out: ", error);
        });

    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">Smart Deal</Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
   { user ?
   <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button> : <NavLink to="/register">Login</NavLink>
   }
  </div>
</div>
    );
};

export default Navbar;