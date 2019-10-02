import React, {Component} from 'react';

class SendOrder extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
        <p>Please confirm your order</p>
        <button>Back to menu</button>
        <button>Submit</button>
        </div>
    )
    }
}

export default SendOrder;