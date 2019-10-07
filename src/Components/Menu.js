import React, {Component} from 'react';


class Menu extends Component {
    constructor() {
        super();
    }
render() {
    return(
        <div>
 <div><h1>MENU</h1>
 </div>
 <div className="Container2">

    <div className="Food">
        
        <h2>Food</h2>
        {<img className="cocaAzul" src="https://pbs.twimg.com/media/BVjTuebCMAA01nY.jpg:large"></img>}
        <p>Blue Burger</p>
        {<img className="cocaAzul" src="https://s3-media2.fl.yelpcdn.com/bphoto/_0Tr1X0pN0GWnrPkQij3IA/o.jpg"></img>}
        <p>Galaxy Taquitos</p>
        {<img className="cocaAzul" src="https://www.cocinayvino.com/wp-content/uploads/2017/02/ramenazul2.jpg"></img>}
        <p>Blue mermaid (Ramen)</p>
        </div>

    <div className="Drinks">

    <h2>Drinks</h2>
    {<img className="cocaAzul" src="https://i.pinimg.com/originals/71/21/fa/7121fa71eeae93aa2e4aae834d0c2d95.jpg"></img>}
    <p>Blue CocaCola</p>

    {<img className="cocaAzul" src="https://cdn2.foap.com/images/cf3b6942-a98e-46a8-a7fd-2830c7d78251/w640.jpg?1527461987"></img>}
    <p>Blue Fanta</p>
    
    {<img className="cocaAzul" src="https://i.pinimg.com/originals/d1/f3/6a/d1f36afe892814b020b49caa82d47c51.jpg"></img>}
    <p>Unicorn Pony Random</p>
    </div>

    <input placeholder="Total"></input>

       <div>
           <button className="Send">Send</button>
           
           </div> 
           
<div className="card"></div>
        </div>
        </div>
    )}
}

export default Menu;
