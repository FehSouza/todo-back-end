import { todoList } from './todoList.js'

export class GetTodoController {
  execute() {
    const list = todoList.get()
    return { status: 200, content: list }
  }
}
