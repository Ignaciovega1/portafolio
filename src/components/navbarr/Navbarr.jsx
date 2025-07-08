import React from "react";
import "./navbarr.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarr = () => {

return (

  <div>

<nav class="navbar navbar-expand-lg p-4 fixed-top" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ignacio Vega</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav offset-8">
        <li class="nav-item mr-4">
          <a class="nav-link" href="#abme">Sobre mí</a>
        </li>
        <li class="nav-item mr-4">
          <a class="nav-link" href="#expe">Experiencias</a>
        </li>
        <li class="nav-item mr-4">
          <a class="nav-link" href="#tec">Tecnologias</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>

)

}

export default Navbarr