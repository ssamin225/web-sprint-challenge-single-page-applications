import React, { useState } from "react";
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from "./component/Home";
import PizzaForm from "./component/PizzaForm";
import * as yup from 'yup';
import schema from "./validation/schema";

const initialOrder = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  black_olives: false,
  extra_cheese: false,
  special: '',
};

const initialFormErrors = {
  name: ''
}

const App = () => {
  const [fullOrder, setFullOrder] = useState([]);
  const [order, setOrder] = useState(initialOrder);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const updateOrder = (name, value) => {
    validate(name, value);
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
        <NavLink to='/'>Home</NavLink>
      </nav>
      
      <Switch>
        <Route path='/pizza'>
          <PizzaForm order={order} update={updateOrder} submit={addToOrder} errors={formErrors} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
