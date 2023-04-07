import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import { Route, HashRouter, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>  
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/contact' element={ <ContactForm/>} />
            <Route path='/about-us' element={ <AboutUs/>} />
        </Routes>
        <Footer/>

    </HashRouter>
  );
}

export default App;
