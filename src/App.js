import React, { useState } from "react";
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from "./component/Home";
import PizzaForm from "./component/PizzaForm";

const initialOrder = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  black_olives: false,
  extra_cheese: false,
  special: '',
};

const App = () => {
  const [fullOrder, setFullOrder] = useState([]);
  const [order, setOrder] = useState(initialOrder);

  const updateOrder = (name, value) => {
    setOrder({ ...order, [name]: value });
  }
  
  const addToOrder = () => {
    const newOrder = {
      name: order.name.trim(),
      size: order.size,
      toppings: [
        'pepperoni',
        'sausage',
        'black_olives',
        'extra_cheese'
      ].filter(topping => order[topping]),
      special: order.special
    }

    setFullOrder([newOrder, ...fullOrder])
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
          <PizzaForm order={order} update={updateOrder} submit={addToOrder} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
