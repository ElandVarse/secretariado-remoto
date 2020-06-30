import React from 'react';


import logo from '../../assets/work.svg'

import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer' 
import Content from './Components/Content';

const Home = () => (
    <div className="Home">
        
        <Sidebar />

        <section className="intro">
            <img src={logo} alt="logo"/>
            <h1>Secretariado Remoto</h1>
        </section>

        <Content />
    
        <Footer />
    </div>
)
export default Home;
