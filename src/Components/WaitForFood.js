import React, {Component} from 'react';

class WaitForFood extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
         {<img src="https://66.media.tumblr.com/15fb32db6e1dd51f4ad43319a30de494/tumblr_n6pqj9Q6qB1sqsanfo1_400.gif"></img>}
        <p>Your order has been send, it will be ready about 30 minutes</p>
          <button className="cancel" >cancel</button>
        <p>After 6 minutes you cannot cancel</p>
    </div>
    )
    }
}

export default WaitForFood;