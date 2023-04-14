/// <reference types="cypress" />
it('should navigate to ToDoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', { timeout: 6000 }).type('learn cypress {enter}')
    cy.get('.toggle').click()
    cy.get('.new-todo').type('clean the house {enter}')
    cy.get(':nth-child(1) > .view > .toggle').click()
    cy.get(':nth-child(3) > a').click()
    cy.contains('Clear completed').click() //we can use it instead of cy.get


})