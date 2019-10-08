import React, {Component} from 'react';

class RedirectMenu extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div>
    <a href="/Menu">
     <button className="buttonmenu">Slide to start</button>
     </a>
    </div>
    )
    }
}

export default RedirectMenu;