const { loadComponent } = require('../../util')
const simulate = require('miniprogram-simulate')

describe('props component test', () => {
  it('render with props test', async () => {
    const id = loadComponent('src/components/props-test/props-test.mpx')

    /* props */
    const comp = simulate.render(id, { propsContent: 'world' })
    comp.attach(document.createElement('parent-wrapper'))
    // expect(comp.toJSON()).toMatchSnapshot()

    /* dispatchEvent */
    const increaseButton = comp.querySelector('.increase-button')
    expect(comp.data.count).toBe(0)
    /* dispatchEvent事件名规范: 去掉前导bind剩余的字符串为事件名，例如bindtap，触发时就是tap */
    increaseButton.dispatchEvent('tap')
    await simulate.sleep(0)
    expect(comp.data.count).toBe(1)
    // expect(comp.toJSON()).toMatchSnapshot()

    /* setData */
    comp.setData({ count: 0 })
    await simulate.sleep(0)
    expect(comp.data.count).toBe(0)
    // expect(comp.toJSON()).toMatchSnapshot()
  })

  // it('render without props test', () => {
  //   const id = loadComponent('src/components/props-test.mpx')
  //   const comp = simulate.render(id, {})
  //   comp.attach(document.createElement('parent-wrapper'))
  //   expect(comp.toJSON()).toMatchSnapshot()
  // })
})
