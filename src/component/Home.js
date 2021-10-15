import React from "react";
import { Link, Route } from 'react-router-dom';

const Home = props => {
    return(
        <Link to='/pizza' id='order-pizza'>Order Pizza!</Link>
    );
}

export default Home;