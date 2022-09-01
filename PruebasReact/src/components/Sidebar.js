import React, { Component } from 'react';


class Sidebar extends Component {


    render() {

        return ( //el return solo devuelve una etiqueta

          
        <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item">
            <h3>Puede hacer esto</h3>
            <a href="#" className="btn btn-success">Crear articulo</a>

        </div>

        <div id="search" className="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentre el articulo que busca</p>
            <form action="">
                <input type="text" name="search" />
                <input type="submit" name="submit" value="Buscar" className="btn" />
            </form>

        </div>


    </aside>


        )

    }
}

export default Sidebar;