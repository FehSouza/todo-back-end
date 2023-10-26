import { todoList } from './todoList.js'

const verifyId = (id) => {
  if (!id) return { status: 400, message: 'Enter an ID number' }
  if (typeof id !== 'number') return { status: 400, message: 'ID must be a number' }
  const hasId = todoList.get().some((item) => item.id === id)
  if (!hasId) return { status: 400, message: 'This ID does not exist in the list' }
}

export const deleteValidation = ({ id }) => {
  const errors = []
  const idError = verifyId(id)
  if (idError) errors.push(idError)
  return errors
}
