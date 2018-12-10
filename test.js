import test from "ava"
import promisifyAll from './dist/promisify-all.js'

const fakeObject = {
  syncFunc: (cb) => {
    cb(null, 'a')
  },
}

Object.setPrototypeOf(fakeObject, {
  syncFuncProtoType: (cb) => {
    cb(null, 'a')
  }  
})

const newClient = promisifyAll(fakeObject)

test.cb("sync", t => {
  newClient.syncFunc((err, res) => {
    t.deepEqual(res, 'a')
    t.end()
  })
})
test("syncFuncAsync", t => {
  t.true(newClient.syncFuncAsync() instanceof Promise)
})
test("async", async t => {
  const result = await newClient.syncFuncAsync()
  t.deepEqual(result, 'a')
})