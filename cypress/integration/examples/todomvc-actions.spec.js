// to run all tests use this command "npx cypress run"
//to run only one test use this command "npx cypress run spec cypress/integration/examples/todomvc-filtering.spec.js " for example

/// <reference types="cypress" />

describe('MVC ToDo App actions' ,() =>{
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('learn cypress {enter}')
    })

it('adds a new item on the list', () => {
    cy.get('label').should('have.text', 'learn cypress') // making an assertion
    cy.get('.toggle').should('not.be.checked')
})

it('checks the item on the list', () => {
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})

it('clears the completed items', () =>{
    cy.get('.toggle').click()
    cy.contains('Clear completed').click() //we can use it instead of cy.get
    cy.get('.todo-list').should('not.have.descendants', 'li')
})
}
)