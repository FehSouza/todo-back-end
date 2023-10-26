import { todoList } from './todoList.js'

const verifyStatus = (status) => {
  if (status && typeof status !== 'boolean') return { status: 400, message: 'The status value must be a boolean' }
}

const verifyId = (id) => {
  if (!id) return { status: 400, message: 'Enter an ID number' }
  if (typeof id !== 'number') return { status: 400, message: 'ID must be a number' }
  const hasId = todoList.get().some((item) => item.id === id)
  if (!hasId) return { status: 400, message: 'This ID does not exist in the list' }
}

export const updateValidation = ({ id, status }) => {
  const errors = []
  const idError = verifyId(id)
  if (idError) errors.push(idError)
  const statusError = verifyStatus(status)
  if (statusError) errors.push(statusError)
  return errors
}
