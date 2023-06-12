import {BrowserRouter, Routes, Route}
from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Home';
import Sobre from './components/Pages/Sobre';
import Tempo from './components/Pages/Tempo';
import Turismo from './components/Pages/Destino';
import Login from './components/Pages/Login/Login';
import Conversor from './components/Pages/Conversor';
import Carregamento from './components/Pages/Carregamento/Carregamento';


function RouterApp() {
    return (
        <BrowserRouter>
            <Header/> 
            <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/tempo' element = {<Tempo/>}/>
                <Route path = '/sobre' element = {<Sobre/>}/>
                <Route path = '/login' element = {<Login/>}/>
                <Route path = '/destino' element = {<Turismo/>}/>
                <Route path = '/conversor' element = {<Conversor/>}/>
                <Route path = '/carregamento' element = {<Carregamento/>}/>
            </Routes>   
            <Footer/>
        </BrowserRouter>
    )
}
export default RouterApp;