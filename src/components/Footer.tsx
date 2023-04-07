import React from 'react'
import './CSS/footer.css'

export default function Footer() {
  return (
    <div>
        <footer className="footerRedes">   
            <ul className="footerRedes__lista">
                <li className="footerRedes__item">
                    <a href="https://www.facebook.com" className="footerRedes__enlace facebook"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className="footerRedes__item">
                    <a href="https://www.instagram.com" className="footerRedes__enlace   instagram"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="footerRedes__item">
                    <a href="https://www.instagram.com" className="footerRedes__enlace twitter"><i className="fab fa-twitter"></i></a>
                </li>
                
            </ul>
            
        </footer>
    </div>
  )
}
