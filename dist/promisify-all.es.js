var _require = require('util'),
    promisify = _require.promisify;

module.exports = function (client) {
  if (typeof client !== 'object') throw new Error('Only object are allowed.');
  var pairs = Object.keys(Object.getPrototypeOf(client)).concat(Object.getOwnPropertyNames(client));
  console.log(pairs);
  var newClient = pairs.reduce(function (acc, key) {
    if (typeof client[key] === 'function' && key !== 'constructor') {
      acc[key + "Async"] = promisify(client[key]);
    }

    return acc;
  }, client);
  return newClient;
};
