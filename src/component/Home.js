import React from "react";
import { Link, Route } from 'react-router-dom';

const Home = props => {
    return(
        <div>
            <Link to='/pizza' id='order-pizza'>Order Pizza!</Link>
        </div>
    );
}

export default Home;