import React, {Component} from 'react';

class AlertYourFoodIsReady extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className= "Container5">
        <h1>Kitchen staff</h1>
        <p>id table</p>
        {<img className="cocaAzul" src="https://pbs.twimg.com/media/BVjTuebCMAA01nY.jpg:large"></img>}
<p>Earth Burger</p>

{<img className="cocaAzul" src="https://i.pinimg.com/originals/71/21/fa/7121fa71eeae93aa2e4aae834d0c2d95.jpg"></img>}
    <p>Blue CocaCola</p>
            <div>
            <a href="/OrderReady">
            <button className="buttonStyle">The order is ready!</button>
            </a>
            </div>
    </div>
    )}
}

export default AlertYourFoodIsReady;