/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('learn cypress {enter}')
        cy.get('.new-todo').type('clean room {enter}')
        cy.get('.new-todo').type('do skincare {enter}')
    })
})

