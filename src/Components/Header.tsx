import React from 'react'
import img1 from '../images/Anthology.png'

export default function Header() {

    return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-dark text-black-50" style={{height:'50px'}}>
  <div className="container-fluid ml-0">
    <a className="navbar-brand " href="#">
        <img  src={img1} alt="logo" style={{height:'50px'}} className="float-left"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase active" aria-current="page" href="#">Menu&nbsp;<i className="fas fa-bars"></i></a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase active" href="#">Raksha K</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase active disabled" href="#" tabIndex={-1} aria-disabled="true"><i className="fas fa-power-off"></i></a>
        </li>
   
      </ul>
     
    </div>
  </div>
</nav>


    )
}

