import React from "react";

const PizzaForm = props => {
    return (
        <form>
            <label>Name
                <input 
                    type='text'
                    id='name-input'
                    name='name'
                />
            </label>
        </form>
    );
}

export default PizzaForm;