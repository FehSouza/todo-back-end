import { todoList } from './todoList.js'
import { updateValidation } from './updateValidation.js'

export class UpdateTodoController {
  execute({ id, task, status }) {
    const errors = updateValidation({ id, status })

    if (errors.length > 0) {
      const sameErrors = errors.every((error) => error.status === errors[0].status)
      const status = sameErrors ? errors[0].status : 400
      return { status, content: errors }
    }

    const list = todoList.update({ id, task, status })
    return { status: 200, content: list }
  }
}
