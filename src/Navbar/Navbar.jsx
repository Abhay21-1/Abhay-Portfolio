import React from 'react'
import {Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg fixed-top ">
  <div className="container">
    <a className="navbar-brand text-light" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link to={"/"} className='navv'><h5>Home</h5></Link>
        </li>
        <li className="nav-item">
        <Link to={"/About"} className='navv'><h5>About</h5></Link>
        </li>
        <li className="nav-item">
        <Link to={"/Projects"} className='navv'><h5>Projects</h5></Link>
        </li>
        <li className="nav-item">
          <Link to={"/Skills"} className='navv'><h5>Skills</h5></Link>
        </li>
        <li className="nav-item">
        <Link to={"/Contact"} className='navv'><h5>Contact</h5></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


