import React from 'react'
import { Link } from 'react-router-dom'
import "./CSS/navBar.css"


export default function NavBar() {
  return (
    <nav>
        <h2>LOGO</h2>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/about-us">Sobre nosotros</Link>
            </li>
            <li>
                <Link to="/contact">Contactenos</Link>
            </li>
        </ul>
    </nav>
  )
}
