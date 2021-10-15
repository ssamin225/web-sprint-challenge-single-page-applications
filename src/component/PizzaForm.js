import React from "react";

const PizzaForm = props => {
    const { order, update } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    return (
        <form id='pizza-form'>
            <label>Name
                <input 
                    type='text'
                    id='name-input'
                    name='name'
                    value={order.name}
                    onChange={onChange}
                />
            </label>
            <label>Pizza Size
                <select id='size-dropdown' value={order.size} name ='size' onChange={onChange}>
                    <option value=''>---Select A Size---</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
        </form>
    );
}

export default PizzaForm;