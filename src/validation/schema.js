import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'please select a size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    black_olives: yup.boolean(),
    extra_cheese: yup.boolean(),
    special: yup.string()
});

export default schema;