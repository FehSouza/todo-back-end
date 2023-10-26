import { Router } from 'express'
import { AddTodoController } from './AddTodoController.js'
import { DeleteTodoController } from './DeleteTodoController.js'
import { GetTodoController } from './GetTodoController.js'
import { UpdateTodoController } from './UpdateTodoController.js'

const addTodoController = new AddTodoController()
const getTodoController = new GetTodoController()
const updateTodoController = new UpdateTodoController()
const deleteTodoController = new DeleteTodoController()

export const todoRouter = new Router()

todoRouter.post('/create', (req, res) => {
  const { task, status } = req.body
  const result = addTodoController.execute({ task, status })
  res.status(result.status).json(result.content)
})

todoRouter.get('/read', (req, res) => {
  const result = getTodoController.execute()
  res.status(result.status).json(result.content)
})

todoRouter.put('/update', (req, res) => {
  const { id, task, status } = req.body
  const result = updateTodoController.execute({ id, task, status })
  res.status(result.status).json(result.content)
})

todoRouter.delete('/delete', (req, res) => {
  const { id } = req.body
  const result = deleteTodoController.execute({ id })
  res.status(result.status).json(result.content)
})
