import React, {Component} from 'react';

class Menu extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className="Container2">

    <div className="Food">
        <h1>MENU</h1>
        <h2>Food</h2>
        <button>Pollo</button>
        <button>Pescado</button>
        </div>

    <div className="Drinks">
    <h2>Drinks</h2>
    <button>CocaCola</button>
    <button>Malteada</button>
    </div>


<div className="card"></div>
        </div>
    )}
}

export default Menu;
