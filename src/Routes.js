import React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import Menu from './Components/Menu';
import AlertYourFoodIsReady from './Components/AlertYourFoodIsReady';
import KitchenConfirm from './Components/Kitchenconfirm';
import OrderReady from './Components/OrderReady';
import SendOrder from './Components/Sendorder';
import WaitForFood from './Components/WaitForFood';
import Home from './Components/Home';
import App2 from './Components/App2';





const Routes = () => (
  
  <HashRouter basename='/home'>
    <Switch> 
      
      <Route path="/AlertYourFoodIsReady" component ={AlertYourFoodIsReady}/>
      <Route path="/KitchenConfirm" component ={KitchenConfirm}/>
      <Route path="/Menu" component ={Menu}/>
      <Route path="/OrderReady" component ={OrderReady}/>
      <Route path="/SendOrder" component ={SendOrder}/>
      <Route path="/WaitForFood" component ={WaitForFood}/>
      <Route exact path="/" component ={Home}/>
      <Route path="/App2" component ={App2}/>
    </Switch>
    </HashRouter>
  )

  export default Routes;