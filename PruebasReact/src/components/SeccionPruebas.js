import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas'


class SeccionPruebas extends Component {

    HolaMundo(nombre, edad) {
        var presentacion = (
          <div>
            <h2>Hola, soy {nombre}</h2>
            <h3>tengo {edad}</h3>
          </div>
        );
        return presentacion;
      }


    render() {
        var nombre = "Jony Rainbow"


        return (

            <section id="content">
                <h2 class="subheader">Ultimos artículos</h2>
                <p>
                    Hola bienvenido al curso de react
                </p>


                {this.HolaMundo(nombre, 12)}

                <section className="componentes">
                    <MiComponente />
                    <Peliculas />

                </section>
            </section>




        ); //el return solo devuelve una etiqueta


    }

}

export default SeccionPruebas;
