import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component{

    
    render(){

      

        return ( //el return solo devuelve una etiqueta
        <div id= "peliculas">
            <h4>Soy el componenete de peliculas</h4>
            <MensajeEstatico />
        </div>        
        );
    }

}

export default Peliculas;