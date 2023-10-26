const verifyTask = (task) => {
  if (!task) return { status: 400, message: 'Task name is required' }
}

const verifyStatus = (status) => {
  if (status && typeof status !== 'boolean') return { status: 400, message: 'The status value must be a boolean' }
}

export const addValidation = ({ task, status }) => {
  const errors = []
  const taskError = verifyTask(task)
  if (taskError) errors.push(taskError)
  const statusError = verifyStatus(status)
  if (statusError) errors.push(statusError)
  return errors
}
