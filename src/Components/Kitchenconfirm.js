import React, {Component} from 'react';

class KitchenConfirm extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
<h1>KITCHEN STAFF</h1>
<p>ID TABLE #</p>
{<img className="cocaAzul" src="https://pbs.twimg.com/media/BVjTuebCMAA01nY.jpg:large"></img>}
<p>Earth Burger</p>

{<img className="cocaAzul" src="https://i.pinimg.com/originals/71/21/fa/7121fa71eeae93aa2e4aae834d0c2d95.jpg"></img>}
    <p>Blue CocaCola</p>

<a href="/WaitForFood">

     <button className="buttonStyle">CONFIRM THE ORDER! ✔</button>
     </a>
    </div>
    )    
}
}

export default KitchenConfirm;