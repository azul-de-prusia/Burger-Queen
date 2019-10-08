import React, {Component} from 'react';

class AlertYourFoodIsReady extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className= "Container7">
    <p>YOUR ORDER IS READY!</p>
    {<img className="space" src="https://media2.giphy.com/media/3o84TYShVxcDbZEx2g/giphy.gif"></img>}
        <h2>In a few moments it will arrive to your table...</h2>
        </div>
    )}
}

export default AlertYourFoodIsReady;