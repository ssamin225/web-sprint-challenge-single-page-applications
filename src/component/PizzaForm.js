import React from "react";

const PizzaForm = props => {
    const { order, update } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        update(name, newValue);
    }

    return (
        <form id='pizza-form'>
            <label>Name
                <input 
                    type='text'
                    id='name-input'
                    name='name'
                    value={order.name}
                    maxLength='40'
                    placeholder='Please enter your name'
                    onChange={onChange}
                />
            </label>
            <label>Pizza Size
                <select 
                    id='size-dropdown'
                    value={order.size}
                    name ='size'
                    onChange={onChange}
                >
                    <option value=''>---Select A Size---</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <h2>Toppings</h2>
            <label>
                <input 
                    type='checkbox'
                    name='pepperoni'
                    checked={order.pepperoni}
                    onChange={onChange}
                />
                Pepperoni
            </label>
            <label>
                <input 
                    type='checkbox'
                    name='sausage'
                    checked={order.pepperoni}
                    onChange={onChange}
                />
                Sausage
            </label>
            <label>
                <input 
                    type='checkbox'
                    name='black_olives'
                    checked={order.pepperoni}
                    onChange={onChange}
                />
                Black Olives
            </label>
            <label>
                <input 
                    type='checkbox'
                    name='extra_cheese'
                    checked={order.pepperoni}
                    onChange={onChange}
                />
                Extra Cheese
            </label>
            <h2>Special Instructions</h2>
            <input 
                type='text'
                id='special-text'
                name='special'
                value={order.special}
                placeholder='Anything else you would like to add?'
                maxLength='256'
                onChange={onChange}
            />
        </form>
    );
}

export default PizzaForm;