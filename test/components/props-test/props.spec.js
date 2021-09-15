const { loadComponent } = require('../../util')
const simulate = require('miniprogram-simulate')

describe('props component test', () => {
  it('render with props test', () => {
    const id = loadComponent('src/components/props-test.mpx')
    const comp = simulate.render(id, { propsContent: 'Hello' })
    comp.attach(document.createElement('parent-wrapper'))
    expect(comp.toJSON()).toMatchSnapshot()
  })

  // it('render without props test', () => {
  //   const id = loadComponent('src/components/props-test.mpx')
  //   const comp = simulate.render(id, {})
  //   comp.attach(document.createElement('parent-wrapper'))
  //   expect(comp.toJSON()).toMatchSnapshot()
  // })
})
