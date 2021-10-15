import React from "react";
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from "./component/Home";
import PizzaForm from "./component/PizzaForm";

const App = () => {
  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <NavLink to='/'>Home</NavLink>
      </nav>
      
      <Switch>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
