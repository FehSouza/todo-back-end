import express, { json, urlencoded } from 'express'
import { AddTodoController } from './AddTodoController.js'
import { DeleteTodoController } from './DeleteTodoController.js'
import { GetTodoController } from './GetTodoController.js'
import { UpdateTodoController } from './UpdateTodoController.js'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

const port = 3333

const addTodoController = new AddTodoController()
const getTodoController = new GetTodoController()
const updateTodoController = new UpdateTodoController()
const deleteTodoController = new DeleteTodoController()

app.post('/create', (req, res) => {
  const { task, status } = req.body
  const result = addTodoController.execute({ task, status })
  res.status(result.status).json(result.content)
})

app.get('/read', (req, res) => {
  const result = getTodoController.execute()
  res.status(result.status).json(result.content)
})

app.put('/update', (req, res) => {
  const { id, task, status } = req.body
  const result = updateTodoController.execute({ id, task, status })
  res.status(result.status).json(result.content)
})

app.delete('/delete', (req, res) => {
  const { id } = req.body
  const result = deleteTodoController.execute({ id })
  res.status(result.status).json(result.content)
})

app.listen(port, console.log(`Server listening port ${port}`))
