import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './Components/Menu';
import AlertYourFoodIsReady from './Components/AlertYourFoodIsReady';
import KitchenConfirm from './Components/Kitchenconfirm';
import OrderReady from './Components/OrderReady';
import SendOrder from './Components/Sendorder';
import WaitForFood from './Components/WaitForFood';





const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/AlertYourFoodIsReady" component ={AlertYourFoodIsReady}/>
      <Route path="/KitchenConfirm" component ={KitchenConfirm}/>
      <Route path="/Menu" component ={Menu}/>
      <Route path="/OrderReady" component ={OrderReady}/>
      <Route path="/SendOrder" component ={SendOrder}/>
      <Route path="/WaitForFood" component ={WaitForFood}/>
    </Switch>
    </BrowserRouter>
  )

  export default Routes;