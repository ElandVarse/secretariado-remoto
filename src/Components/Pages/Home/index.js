import React from 'react';


import logo from '../../../assets/work.svg'

import Sidebar from '../../Sidebar';
import Footer from './Footer' 
import About from './About';
import Services from './Services'

const Home = () => (
    <div className="Home">
        
        <Sidebar />

        <section className="intro">
            <img src={logo} alt="logo"/>
            <h1>Secretariado Remoto</h1>
        </section>

        <About />
        <Services />
    
        <Footer />
    </div>
)
export default Home;
