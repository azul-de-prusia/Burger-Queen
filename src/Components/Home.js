import Menu from "./Menu";
import React, {Component} from 'react';
import RedirectMenu from './RedirectMenu';

class Home extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className= "home">
        <p>Alert</p>
        <RedirectMenu />
        </div>
    )}
}

export default Home;