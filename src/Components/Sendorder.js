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
        <button className="buttonback">Back to menu</button>
        <button className="buttonsubmit">Submit</button>
        </div>
    )
    }
}

export default SendOrder;