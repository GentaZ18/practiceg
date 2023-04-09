describe('Miami to Fort Lauderdale Monthly Commuter Pass', () => {
    it('should successfully purchase a Monthly Commuter Pass with auto-renew for Miami to Fort Lauderdale', () => {
        cy.visit('https://www.gobrightline.com/train-passes')
        cy.viewport(1300, 900)

        // Wait for the page to load
        cy.wait(2000)
        cy.contains('Build Your Pass')
            // Click the 'Build Your Pass' button
        const buildYourPassButton = cy.get('[data-testid="primaryBtnWithLoader"]')
        buildYourPassButton.click().then(() => {

            // Select Miami as the starting point
            const travelFromButton = cy.get('#headlessui-menu-button-1')
            travelFromButton.click()
            cy.get('#headlessui-menu-items-2').contains('Miami').click()

            // Select Fort Lauderdale as the destination
            const travelToButton = cy.get('#headlessui-menu-button-3')
            travelToButton.click()
            cy.get('#headlessui-menu-items-4').contains('Fort Lauderdale').click()

            // Selecting other options for the ticket
            cy.get('#form-widget > .flex-row > :nth-child(1)').contains('Smart').click()
            cy.get(':nth-child(10) > .px-5').contains('Monthly').click()
            cy.get('[data-testid="primaryBtnWithLoader"]').contains('Continue').click()
            cy.get('[data-testid="primaryBtnWithLoader"]').contains('Continue').click()
            cy.get('.items-start > .flex-col > .text-bl-black').should('have.text', '$285').as('price1');

            //Adding the ticket to cart
            cy.get('[data-testid="primaryBtnWithLoader"]').contains('ADD TO CART').click()
            cy.get('[data-testid="btn"]').contains('CHECK OUT').click()
                //Trying to redirect to checkout, but it redirects us to the cart page bc we are guest users
            cy.url().should('include', '/cart')
                // Check that the prices are displayed correctly in the cart
            cy.get('.hidden > .flex > .text-14').should('have.text', '$299')
            cy.get('.flex > .text-20').should('have.text', '$284.05').as('price2');
            // checks if the initial price is equal to the price on the cart page
            cy.get('@price1').then((price1) => {
                cy.get('@price2').then((price2) => {
                    expect(price1.text()).to.eq(price2.text());
                });
            });
        })
    })
})