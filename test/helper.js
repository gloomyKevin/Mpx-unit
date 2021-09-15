// 用mock替换原组件
function mockMethod (comp, method) {
  const mockname = comp.instance[method] = jest.fn()
  return mockname
}

module.exports = {
  mockMethod
}
