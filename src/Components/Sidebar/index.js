import React from 'react';

import './Sidebar.css'

import { LogOut } from 'react-feather'

import avatar from '../../assets/female-avatar.svg'

const Sidebar = () => {
    return (
        <section className="sideBar">
            
            <div className="userInterface">
                <div className="insideBar">
                    <img src={avatar} alt="Avatar"/>
                </div>
                
                <h2>User</h2>
            </div>
            
            <div className="config">
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                    {/* <li>Perfil</li>
                    <li>Configurações</li> */}
                </ul>
                <p>Esqueceu a senha?</p>
            </div>

            <div className="logout">
                <p>Logout</p>
                <LogOut />
            </div>
        </section>
    )
}

export default Sidebar;