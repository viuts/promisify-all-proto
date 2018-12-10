# Promisify an object including all it's prototypes

## Usage
```javascript
const promisifyAll = require('promisify-all-proto')

// oldObject.getKey is a callback syntax function
const newClient = promisifyAll(oldObject)

const response = await newClient.getKeyAsync()
```