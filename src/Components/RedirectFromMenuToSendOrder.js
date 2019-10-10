import React, {Component} from 'react';

class RedirectFromMenuToSendOrder extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
    <a href="/Sendorder">
    <button className="Send">ORDER NOW</button>
     </a>
    </div>
    )
    }
}

export default RedirectFromMenuToSendOrder;