import React from "react";
import "./footer.css";

const Footer = () => {


return(

<footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col md-6">
            <h5>Ignacio Vega</h5>
            <p>Desarrollador Web • Frontend | Backend | Data</p>
          </div>
          <div className="col text-md-end md-6">
            <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
            <a href="https://www.linkedin.com/in/ignacio-vega-7b4226301" className="text-light me-3">LinkedIn</a>
            <a href="https://github.com/Ignaciovega1" className="text-light">GitHub</a>
          </div>
        </div>
      </div>
    </footer>

)


}

export default Footer