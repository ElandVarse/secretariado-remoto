import React from 'react';
import './styles.css';
import { render } from 'react-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Main className='mano' />
    <Footer />
  </div>
)
export default App;
