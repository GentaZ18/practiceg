// to run all tests use this command "npx cypress run"
//to run only one test use this command "npx cypress run spec cypress/integration/examples/todomvc-filtering.spec.js " for example

/// <reference types="cypress" />
import{
    navigate,
    addTodo,
    toggleTodo,
    showOnlyActiveTodos,
    showOnlyCompletedTodos,
    showAllTodos,
    validateNumberOfTodosShown,
  }from '../page-objects/todo-page'
  
  describe('filtering', function() {
    beforeEach(() => {
      navigate()
  
      addTodo('Clean room')
      addTodo('Learn JavaScript')
      addTodo('Use Cypress')
  
      toggleTodo(1)
    })
  
    it('should filter "Active" correctly', () => {
      showOnlyActiveTodos()
  
      validateNumberOfTodosShown(2)
    })
  
    it('should filter "Completed" correctly', () => {
      showOnlyCompletedTodos()
  
      validateNumberOfTodosShown(1)
    })
  
    it('should filter "All" correctly', () => {
      showAllTodos()
  
      validateNumberOfTodosShown(3)
    })
  })