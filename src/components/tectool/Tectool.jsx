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
              Frameworks y librerías
            </button>
            <button onClick={() => setActiveCategory("ides")} className="btn btn-primary">
              IDEs y DB
            </button>
            <button onClick={() => setActiveCategory("otros")} className="btn btn-primary">
              Otros
            </button>
          </div>

          {/* Contenido dinámico */}
          <div className="iconos-categorias mt-4">
            {activeCategory === "lenguajes" && (
              <div className="lenguajes">
                <div className="icon-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML" className="" id="i_html" />
                <p>HTML</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS" className="" id="i_css" />
                <p>CSS</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" className="" id="i_js" />
                <p>JavaScript</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" className="" id="i_pyt" />
                <p>Python</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" className="" id="i_c" />
                <p>C</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++" id="i_cpp" />
                <p>C++</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" id="i_cpp" />
                <p>Java</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://img.icons8.com/?size=512&id=55251&format=png" alt="C#" id="i_cpp" />
                <p>C#</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="PHP" id="i_cpp" />
                <p>PHP</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://images.icon-icons.com/2415/PNG/512/typescript_plain_logo_icon_146316.png" alt="Ts" id="i_cpp" />
                <p>TypeScript</p>
                </div>
              </div>
            )}

            {activeCategory === "frameworks" && (
              <div className="frameworks">
                <div className="icon-wrapper">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" id="i_reac" />
                <p>React</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="Bootstrap" id="i_reac" />
                <p>Bootstrap</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" alt="Vite" id="i_reac" />
                <p>Vite</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-angular-226066.png?f=webp" alt="Angular" id="i_reac" />
                <p>Angular</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" alt="Laravel" id="i_reac" />
                <p>Laravel</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-jquery-10-1175155.png" alt="Jquery" id="i_reac" />
                <p>Jquery</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Nodejs" id="i_reac" />
                <p>Node.js</p>
                </div>
                {/* Agrega más si los tienes */}
              </div>
            )}

            {activeCategory === "ides" && (
              <div className="ides">
                <div  className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" className="" alt="VSCode" id="i_vscod" />
                <p>VS code</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://1000marcas.net/wp-content/uploads/2020/12/Visual-Studio-Logo.png" alt="VS" id="i_vs" />
                <p>Visual Studio</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://img.icons8.com/color/512/microsoft-sql-server.png" alt="Sqlserver" id="i_vs" />
                <p>SQL Server</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png" alt="Mysql" id="i_vs" />
                <p>My SQL</p>
                </div>
              </div>
            )}

            {activeCategory === "otros" && (
              <div className="otros">
                <div className="icon-wrapper">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175219.png" alt="Git" className="" id="i_gt" />
                <p>Git</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="" id="i_gh" />
                <p>GitHub</p>
                </div>
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma" id="i_fig" />
                <p>Figma</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tectool;