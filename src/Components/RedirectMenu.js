import React, {Component} from 'react';

class RedirectMenu extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
    <a href="/App2">
     <button className="buttonmenu">Click here to order...</button>
     </a>
    </div>
    )
    }
}

export default RedirectMenu;