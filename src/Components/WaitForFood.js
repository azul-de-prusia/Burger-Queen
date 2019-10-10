import React, {Component} from 'react';

class WaitForFood extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className="">
         {<img className="spaceship"src="https://66.media.tumblr.com/15fb32db6e1dd51f4ad43319a30de494/tumblr_n6pqj9Q6qB1sqsanfo1_400.gif"></img>}
        <p>Your order has been send, </p>
        <p>it will be ready about </p>
        {<img  src="https://i.ibb.co/SRVLJGF/ezgif-com-crop-6.gif"></img>}
        <p>minutes</p>
          
          
          
        <a href="/App2">
        <p>You want cancel?</p>
     
     </a>
          
    
        <p>After 6 minutes you cannot cancel</p>
    </div>
    )
    }
}

export default WaitForFood;