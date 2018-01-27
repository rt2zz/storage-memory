import test from 'ava'

import { createMemoryStorage } from '../src'

test('createMemoryStorage returns expected methods', (t) => {
  let storage = createMemoryStorage()
  t.is(typeof storage.getItem, 'function')
  t.is(typeof storage.setItem, 'function')
  t.is(typeof storage.getAllKeys, 'function')
  t.is(typeof storage.removeItem, 'function')
})