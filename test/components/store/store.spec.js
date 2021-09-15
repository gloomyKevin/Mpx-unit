/**
 * store.js
 * 测试内容包括以下
 * 测试思路：mutations/getters/actions 分别测试，测试其中一个的时候，其他依赖伪造mock
*/
import store from '../../../src/components/store/store-single'
const { loadComponent } = require('../../util')
const simulate = require('miniprogram-simulate')
// const store = require('../../../src/components/store/store-single')

describe('store test', () => {
  // 测试内容：mutations
  // 伪造（mock）state 测试mutations下的方法
  it('mutations test', () => {
    console.log('%c [ store ]', 'font-size:13px; background:pink; color:#bf2c9f;', store)
    const state = {
      count: 0
    }
    store.mutations.increment(state)
    expect(state.count).toBe(1)
    store.mutations.decrement(state)
    expect(state.count).toBe(0)
  })

  it('actions test', () => {
    const commit = jest.fn()
    store.actions.increment({ commit })
    expect(commit).toBeCalled()
    expect(commit).toBeCalledWith('increment')
  })
})
