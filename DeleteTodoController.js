import { deleteValidation } from './deleteValidation.js'
import { todoList } from './todoList.js'

export class DeleteTodoController {
  execute({ id }) {
    const errors = deleteValidation({ id })

    if (errors.length > 0) {
      const sameErrors = errors.every((error) => error.status === errors[0].status)
      const status = sameErrors ? errors[0].status : 400
      return { status, content: errors }
    }

    const list = todoList.delete({ id })
    return { status: 200, content: list }
  }
}
