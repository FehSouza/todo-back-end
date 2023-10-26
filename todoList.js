class TodoList {
  #todo = []

  get() {
    return this.#todo
  }

  add({ task, status = false }) {
    const id = Number((Math.random() * 100).toFixed(2))
    this.#todo.push({ id, task, status })
    return this.#todo
  }

  update({ id, task, status }) {
    const list = this.#todo.map((item) => {
      if (item.id === id) return { id, task: task ?? item.task, status: status ?? item.status }
      return item
    })

    this.#todo = list
    return this.#todo
  }

  delete({ id }) {
    const list = this.#todo.filter((item) => item.id !== id)
    this.#todo = list
    return this.#todo
  }
}

export const todoList = new TodoList()
