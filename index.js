import express, { json, urlencoded } from 'express'
import { todoRouter } from './todoRoutes.js'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

const port = 3333

app.use('/todo', todoRouter)
app.listen(port, console.log(`Server listening port ${port}`))
