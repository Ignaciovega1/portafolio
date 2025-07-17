import React from "react";
import "./contact.css";

const Contact = () => {

    return (

        <div id="contact">

            <div className="container">
                <div className="row">
                    <h1>Contacto</h1>
                    <div className="btn-col" id="btn-con">
                        <a href="https://www.linkedin.com/in/ignacio-vega-7b4226301" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <img src="https://img.icons8.com/color/512/linkedin.png" alt="LinkedIn-boton" id="i_link" />
                            <br />
                            <h2>LinkedIn</h2>
                            <h5>Ignacio Vega</h5>
                        </a>
                        <a href="https://github.com/Ignaciovega1" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Git-boton" id="i_git" />
                            <br />
                            <h2>GitHub</h2>
                            <h5>@Ignaciovega1</h5>
                        </a>
                        <a href="mailto:Ivegamac@gmail.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <img src="https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png" alt="hml-boton" id="i_hml" />
                            <br />
                            <h2>Correo</h2>
                            <h5>Ivegamac@gmail.com</h5>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Contact