import { addValidation } from './addValidation.js'
import { todoList } from './todoList.js'

export class AddTodoController {
  execute({ task, status }) {
    const errors = addValidation({ task, status })

    if (errors.length > 0) {
      const sameErrors = errors.every((error) => error.status === errors[0].status)
      const status = sameErrors ? errors[0].status : 400
      return { status, content: errors }
    }

    const list = todoList.add({ task, status })
    return { status: 200, content: list }
  }
}
