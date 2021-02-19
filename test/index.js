const t = require('tap')

t.test('outer', t => {
  t.test('inner', t => {
    t.equal(1, 2, '1 = 2')
    t.end()
  })
  t.end()
})
