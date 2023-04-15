/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('learn cypress {enter}')
        cy.get('.new-todo').type('clean room {enter}')
        cy.get('.new-todo').type('do skincare {enter}')
        cy.get(':nth-child(2) > .view > .toggle').click()
    })

    it('should filter "active" todos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filter "completed" todos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter "all" todos', () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })
})

