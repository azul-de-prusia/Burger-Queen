import React, {Component} from 'react';

class RedirectFromMenuToSendOrder extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
    <a href="/Sendorder">
    <button className="buttonStyle">ORDER NOW</button>
     </a>
    </div>
    )
    }
}

export default RedirectFromMenuToSendOrder;