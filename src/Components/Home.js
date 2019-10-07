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
        <RedirectMenu />
        </div>
    )}
}

export default Home;