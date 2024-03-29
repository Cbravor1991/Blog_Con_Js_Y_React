import React, { Component } from 'react';
import logo from '../assets/images/logo.svg'

class Header extends Component {


    render() {

        return ( //el return solo devuelve una etiqueta

            <header id="header">
                <div className="center">
                    {/*LOGO*/}
                    <div id="logo">
                        <img src = {logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    {/*MENU*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="formulario.html">Formulario</a>
                            </li>
                            <li>
                                <a href="#">Pagina 1</a>
                            </li>
                            <li>
                                <a href="#">Pagina 2</a>
                            </li>
                        </ul>
                    </nav>


                </div>
                {/*LIMPIAR FLOTADOS*/}
                <div className="clearfix"></div>
            </header>



        );
    }

}

export default Header;
