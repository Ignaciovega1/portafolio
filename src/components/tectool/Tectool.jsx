import React, { useState } from "react";
import "./tectool.css";

const Tectool = () => {
  const [activeCategory, setActiveCategory] = useState("lenguajes");

  return (
    <div id="tec">
      <div className="container">
        <div className="row">
          <h1>Tecnologías y herramientas</h1>
          <p>Tecnologías y herramientas que utilizo para crear aplicaciones</p>

          {/* Botones de categorías */}
          <div className="btn-group" role="group" aria-label="Categorías" id="btn-tectool">
            <button onClick={() => setActiveCategory("lenguajes")} className="btn btn-primary">
              Lenguajes
            </button>
            <button onClick={() => setActiveCategory("frameworks")} className="btn btn-primary">
              Frameworks
            </button>
            <button onClick={() => setActiveCategory("ides")} className="btn btn-primary">
              IDEs
            </button>
            <button onClick={() => setActiveCategory("otros")} className="btn btn-primary">
              Otros
            </button>
          </div>

          {/* Contenido dinámico */}
          <div className="iconos-categorias mt-4">
            {activeCategory === "lenguajes" && (
              <div className="lenguajes">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML"  className="mr-4" id="i_html"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS" className="mr-4" id="i_css"/>
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" className="mr-4" id="i_js"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" className="mr-4" id="i_pyt"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" className="mr-4" id="i_c"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++" id="i_cpp"/>
              </div>
            )}

            {activeCategory === "frameworks" && (
              <div className="frameworks">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" id="i_reac"/>
                
                {/* Agrega más si los tienes */}
              </div>
            )}

            {activeCategory === "ides" && (
              <div className="ides">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" className="mr-4" alt="VSCode" id="i_vscod"/>
                <img src="https://1000marcas.net/wp-content/uploads/2020/12/Visual-Studio-Logo.png" alt="VS" id="i_vs"/>
              </div>
            )}

            {activeCategory === "otros" && (
              <div className="otros">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175219.png" alt="Git" className="mr-4" id="i_gt"/>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="mr-4" id="i_gh"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma" id="i_fig"/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tectool;