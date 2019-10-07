import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './Components/Menu';
import AlertYourFoodIsReady from './Components/AlertYourFoodIsReady';
import KitchenConfirm from './Components/Kitchenconfirm';
import OrderReady from './Components/OrderReady';
import SendOrder from './Components/Sendorder';
import WaitForFood from './Components/WaitForFood';
import Home from './Components/Home';
import App2 from './Components/App2';
import Title from './Components2/Title';
import RecipeCard from './Components2/RecipeCard';
import Image from './Components2/Image';




const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route path="/App2" component ={App2}/>
    <Route path="/Title" component ={Title}/>
    <Route path="/Image" component ={Image}/>
    <Route path="/RecipeCard" component ={RecipeCard}/>
      <Route path="/AlertYourFoodIsReady" component ={AlertYourFoodIsReady}/>
      <Route path="/KitchenConfirm" component ={KitchenConfirm}/>
      <Route path="/Menu" component ={Menu}/>
      <Route path="/OrderReady" component ={OrderReady}/>
      <Route path="/SendOrder" component ={SendOrder}/>
      <Route path="/WaitForFood" component ={WaitForFood}/>
      <Route path="/Home" component ={Home}/>
    </Switch>
    </BrowserRouter>
  )

  export default Routes;