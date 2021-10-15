// write tests here
describe('Quotes App', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000/pizza');
    })

    // Getters to cut down on typing
    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const sausage = () => cy.get('input[name=sausage]');
    const black_olives = () => cy.get('input[name=black_olives]');
    const extra_cheese = () => cy.get('input[name=extra_cheese]');
    const orderBtn = () => cy.get("button[id='order-button']");
    const specialInput = () => cy.get('input[name=special]');

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
        pepperoni().should('exist');
        sausage().should('exist');
        black_olives().should('exist');
        extra_cheese().should('exist');
        orderBtn().should('exist');
        specialInput().should('exist');
    })

    describe('Filling out texts and multiple checkboxes and submitting', () => {
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts disabled', () => {
            orderBtn().should('be.disabled');
        })

        it('can type in the name and special inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('John Cena')
                .should('have.value', 'John Cena');
            specialInput()
                .should('have.value', '')
                .type('Extra sauce')
                .should('have.value', 'Extra sauce');
        })

        it('can check multiple toppings', () => {
            pepperoni()
                .check()
                .should('be.checked');
            black_olives()
                .check()
                .should('be.checked');
        })
        
        it('the submit button enables when both name and size are valid', () => {
            nameInput().type('John Cena');
            orderBtn().should('not.be.disabled');
        })
    })
})