import React from 'react';


import logo from '../../../assets/work.svg'

import Sidebar from '../../Sidebar/SideBar';
import Footer from './Footer/Footer' 
import About from './About/About';
import Services from './Services/Services'

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
