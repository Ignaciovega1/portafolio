import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbarr from './components/navbarr/Navbarr'
import Abme from './components/abme/Abme'
import Expe from './components/expe/Expe'
import Tectool from './components/tectool/Tectool'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       
      <Navbarr />
      
      <main>
        <Abme />
        <Expe />
        <Tectool />
        <Contact /> 
        <Footer />
      </main>

      

    </div>
  )
}

export default App
