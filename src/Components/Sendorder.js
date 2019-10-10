import React, {Component} from 'react';

class SendOrder extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className="thirdcontainer">
        <p>Please confirm your order</p>
        {<img src="https://i.ibb.co/JjBj9ZD/giphy.gif"></img>}
        <div>
    <a href="/App2">
     <button className="buttonsubmit">Back to menu</button>
     </a>
    </div>
    <a href="/Kitchenconfirm">
     <button className="buttonsubmit">SUBMIT</button>
     </a>
    </div>
    )
    }
}

export default SendOrder;