import Logo from './images/black-logo.png';
import React from 'react';

function NavHeader() {
  return (
    <>
      <header className="main-header sticky-header sh-2">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand company-logo-2" href="/">
                <img className='site-logo' src={Logo} alt="Logo"/>
            </a>
            <button className="navbar-toggler" type="button" id="drawer">
                <span className="fa fa-bars"></span>
            </button>
            <div className="navbar-collapse collapse w-100 justify-content-end" id="navbar">
                <ul className="navbar-nav ml-auto text-uppercase">
                    <li className="nav-item dropdown active">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/">
                            Car Listing
                        </a>                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/">
                            Services
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                    <li className="nav-item dropdown m-hide">
                        <a href="#full-page-search" className="nav-link h-icon">
                            <i className="fa fa-search"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
    </>
  )
}

export default NavHeader
