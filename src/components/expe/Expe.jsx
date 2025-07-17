import React from "react";
import "./expe.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // incluye Popper
import 'bootstrap/dist/css/bootstrap.min.css';


const Expe = () => {

  return (

    <div id="expe" className="container">
      <h1 id="tiexp">Experiencias</h1>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="jumbotron">
              <h2 class="justify-content-around">UTEM Proyecto de título Página Web PMCUIC</h2>
              <h4>Fullstack - 01-08-2024 - 21-03-2025</h4>
              <br />
              <ul>
                <li>Con mi equipo de trabajo elaboramos un sitio web para el proceso de malla curricular de la unidad de
                  innovación curricular de la UTEM con el fin de eliminar la mayor parte del proceso manual y centrar toda la
                  información en una misma plataforma.</li>
                <li>Desarrollé principalmente una interfaz (Front-End) amigable e intuitiva, con el objetivo de ofrecer una mayor
                  comodidad a los usuarios, además ayude a mis compañeros en el área de Back-End con la tecnología PHP
                  incluyendo PDO para una conexión segura a la base de datos y en la creación de la base de datos ocupando
                  MySQL.</li>
                <li>Levantamos la página en un servicio de alojamiento web que ofrece hosting gratuito llamado Infinity Free,
                  agregamos la base de datos anteriormente creada al alojamiento de DB en Infinity Free, además agregamos la
                  seguridad HTTPS a nuestra página para una conexión segura.</li>
              </ul>
            </div>
          </div>
          <div class="carousel-item">
            <div class="jumbotron">
              <h2 class="justify-content-around">Fundación Nuestros Hijos Práctica Profesional</h2>
              <h4>Analista de datos - 04-11-2024 - 10-01-2025 </h4>
              <br />
              <ul>
                <li>Analicé bases de datos provenientes de fuentes externas de la fundación para diseñar procedimientos ETL y
                  desarrollar código de Web Scraping, permitiendo la migración eficiente de datos a las bases de datos
                  centrales. </li>
                <li>Centralice la información de las bases de datos "FNH" y "Escuela" en la base de datos "Pangea" mediante
                  procesos ETL. Asimismo, utilicé Web Scraping para integrar la base de datos de Salesforce FNH en"Rodinhia",
                  asegurando que la información quedará estructurada, legible y de fácil acceso.</li>
                <li>Elaboré un informe detallado y dinámico en Power BI para la toma de decisiones en la Fundación Nuestros
                  Hijos, proporcionando visualizaciones efectivas y análisis de datos en tiempo real.</li>
              </ul>
            </div>
          </div>
          <div class="carousel-item">
            <div class="jumbotron">
              <h2 class="justify-content-around">UTEM Proyecto de asignatura</h2>
              <h4>Desarrollador Web Front-end - 01-03-2023 - 01-07-2023</h4>
              <br />
              <ul>
                <li>Diseñe e implementé la interfaz de usuario para una página web de aerolíneas como parte de un proyecto académico guiado por un profesor de asignatura.</li>
                <li>Utilicé JavaScript con React en Visual Studio para desarrollar componentes interactivos y funcionales.</li>
                <li>Mi rol principal fue en el área de Front-end, logrando un nivel intermedio en el manejo de JavaScript.</li>
              </ul>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>



  )

}

export default Expe