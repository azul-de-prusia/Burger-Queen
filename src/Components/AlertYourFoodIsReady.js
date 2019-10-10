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
        <p>here goes the image of the order items</p>
            <div>
            <a href="/OrderReady">
            <button className="noticebutton">The order is ready!</button>
            </a>
            </div>
    </div>
    )}
}

export default AlertYourFoodIsReady;