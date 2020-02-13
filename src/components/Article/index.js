import React from 'react';
import image from './img/src.jpg';
import './styles.css'

const Article = () => (
    <article id='main-article'>
        <div id='article-content'>
            <img src={image} alt='SRC'/>
            <h1 class='text'>O que é?</h1>
            <p class='text'>É muito simples Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class='botao-align'>
                <button onClick={() => alert('nice')} class='botao'>Nice</button>
            </div>
        </div>

        <div id='article-content'>
            <img src={image} alt='SRC'/>
            <h1 class='text'>O que é?</h1>
            <p class='text'>É muito simples Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class='botao-align'>
                <button class='botao'>Nice</button>
            </div>
        </div>
    </article>
);

export default Article;