import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth()

  const NavLinks = <>
    <li><NavLink to={'/'}>Product</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/login'}>Login</NavLink></li>
  </>
  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                NavLinks
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Glasses</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {
              NavLinks
            }

          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ?
              <button onClick={logOut} className="btn btn-sm btn-secondary">Logout</button>
              :
              <Link to={'/login'}>
                <button className="btn btn-sm btn-info">Login</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;