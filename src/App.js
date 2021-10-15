import React, { useState } from "react";
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from "./component/Home";
import PizzaForm from "./component/PizzaForm";

const initialOrder = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: '',
};

const App = () => {
  const [order, setOrder] = useState(initialOrder);

  const updateOrder = (name, value) => {
    setOrder({ ...order, [name]: value });
  }

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <NavLink to='/'>Home</NavLink>
      </nav>
      
      <Switch>
        <Route path='/pizza'>
          <PizzaForm order={order} update={updateOrder} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
