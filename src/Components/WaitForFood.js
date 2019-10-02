import React, {Component} from 'react';

class WaitForFood extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
        <p>Your order has been send, it will be ready about 30 minutes</p>
       <button>cancel</button>
        <p>After 6 minutes you cannot cancel</p>
    </div>
    )
    }
}

export default WaitForFood;