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
    {<img className="space" src="https://i.gifer.com/58RA.gif"></img>}
        <RedirectMenu />
        </div>
    )}
}


export default Home;