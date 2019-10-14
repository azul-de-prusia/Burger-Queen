import React, {Component} from 'react';

class OrderReady extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className="orderready">
        {<img className="imagefive" src="http://24.media.tumblr.com/2b614d23b694e6a843b3f59d7e1cda41/tumblr_mn1ytcEZS81s84p5fo1_500.gif"></img>}
        <p>Your order is ready!</p>
        <p>In a few moments it</p>
        <p>will arrive at your table</p>

        <button className="buttonStyle">Are you ready to pay?</button>
    </div>
    )
    }
}

export default OrderReady;