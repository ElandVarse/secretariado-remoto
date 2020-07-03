import React from 'react'

import * as Icon from 'react-feather'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <Icon.Facebook />
                <Icon.Instagram />
                <Icon.Twitter />
                <Icon.Linkedin />
            </div>
            
            <p>Designed and created by <a href="https://github.com/ElandVarse" target="blank">Eland</a></p>
        </footer>
    )
}

export default Footer;