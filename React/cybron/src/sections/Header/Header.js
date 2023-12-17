/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../assets/images/logo.png';
import NavItem, { NavItemDropDown } from '../../components/NavItem/NavItem';


const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cybron-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
            <NavItem><a href="/#" className="nav-link">Browse</a></NavItem>
            <NavItemDropDown>
              <a href="#" className="nav-link " data-bs-toggle="dropdown">Details</a>
              <ul className="dropdown-menu">
                <li><a href="/#" className="dropdown-item">Fortinet</a></li>
                <li><a href="/#" className="dropdown-item">Call Of Duty</a></li>
              </ul>
            </NavItemDropDown>
            <NavItem><a href="/#" className="nav-link">Streams</a></NavItem>
            <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;