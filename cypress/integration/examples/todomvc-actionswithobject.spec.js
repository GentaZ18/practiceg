// to run all tests use this command "npx cypress run"
//to run only one test use this command "npx cypress run spec cypress/integration/examples/todomvc-filtering.spec.js " for example

/// /// <reference types="cypress" />
/// <reference types="cypress" />
import {TodoPage} from '../page-objects/todo-page'

describe('todo actions', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()

    todoPage.addTodo('Clean room')
  })

  it('should add a new todo to the list', () => {
    todoPage.validateTodoText(0, 'Clean room')

    todoPage.validateToggleState(0, false)
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      todoPage.toggleTodo(0)
      todoPage.validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      todoPage.toggleTodo(0)

      todoPage.clearCompleted()

      todoPage.validateNumberOfTodosShown(0)
    })
  })
})