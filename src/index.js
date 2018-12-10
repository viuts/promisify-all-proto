const { promisify } = require('util')

module.exports = (client) => {
  if (typeof client !== 'object') throw new Error('Only object are allowed.')
  const pairs = [
    ...Object.keys(Object.getPrototypeOf(client)),
    ...Object.getOwnPropertyNames(client),
  ]
  const newClient = pairs.reduce((acc, key) => {
    if (typeof client[key] === 'function' && key !== 'constructor') {
      acc[`${key}Async`] = promisify(client[key])
    }
    return acc
  }, client)
  return newClient
}
