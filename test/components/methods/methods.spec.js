const { loadComponent } = require('../../util')
const { mockMethod } = require('../../helper')
const simulate = require('miniprogram-simulate')

describe('methods test', () => {
  it('', async () => {
    /* lifetimes */
    const id = loadComponent('src/components/methods/methods.mpx')
    const comp = simulate.render(id)

    const createdMethod = comp.instance.createdMethod = jest.fn()
    const attachedMethod = comp.instance.attachedMethod = jest.fn()
    const readyMethod = comp.instance.readyMethod = jest.fn()
    // const createdMethod = mockMethod(comp, 'createdMethod')
    comp.attach(document.createElement('parent-wrapper'))

    comp.triggerLifeTime('created')
    comp.triggerLifeTime('attached')
    comp.triggerLifeTime('ready')
    await simulate.sleep(0)
    expect(createdMethod).toBeCalledTimes(1)
    expect(attachedMethod).toBeCalledTimes(1)
    expect(readyMethod).toBeCalledTimes(1)

    /* computed */
  })
})
