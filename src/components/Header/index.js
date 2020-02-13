import React from 'react';
import './styles.css'
import oi from '../Article/img/oi.png'

const Header = () => (
    <header id="main-header">
        <img src={oi} alt='sr'></img>
        <h1>RM - Secretariado</h1>
    </header>
);

export default Header;