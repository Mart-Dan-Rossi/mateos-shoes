import React from 'react'
import "./navBar.css"

function NavBar() {
  return (
    <nav>
        <div>
            <span>Inicio</span>
            <span>
                Comprar
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 256 256" id="Flat">
                  <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z"/>
                </svg>
            </span>
            <span>Contacto</span>
        </div>
    </nav>
  )
}

export default NavBar