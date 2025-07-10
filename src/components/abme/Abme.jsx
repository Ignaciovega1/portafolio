import React from "react";
import "./abme.css";
import Fotoportafolio from '../img/Fotoportafolio.jpg';

const Abme = () => {

  return (

    <div id="abme">
      <br />
      <h1>Sobre mí</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <br />
            <br />
            <img src={Fotoportafolio} class="card-img-top" alt="..." id="ab-img"></img>
          </div>

          <div className="col-6">
            <br />
            <br />
            <br />
            <h1>Ignacio Vega</h1>
            <br />
            <br />
            <p class="text ">Soy Ingeniero en Informática, egresado de la Universidad Tecnológica Metropolitana (UTEM), con experiencia en el desarrollo de proyectos en áreas de Front-end, Back-end y Análisis de Datos. Me encuentro abierto a trabajar con diversas tecnologías, siempre con la motivación de aportar soluciones innovadoras y efectivas, así como continuar creciendo profesionalmente.
                <br /><br />Me caracterizo por ser una persona comprometida, orientada al cumplimiento de objetivos y a la construcción de un ambiente laboral positivo. Estoy constantemente en búsqueda de nuevos conocimientos, tanto en tecnologías emergentes como en lenguajes de programación, con el objetivo de perfeccionar mis habilidades y contribuir significativamente en cada proyecto en el que participo.</p>
            <br />
            <br />
            <div class="jumbotron">
              <h1 class="display-4">Estudios</h1>
              <br />
              <p class="lead">Carrera: Ingeniería en informática en la Universidad tecnológica metropolitana.</p>
              <hr class="my-4" />
              <h1 class="display-4">Mi curriculum.</h1>
              <br />
              <a class="btn btn-primary btn-lg" href="/Curriculum_info.pdf" download role="button">Descargar CV</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  )

}

export default Abme