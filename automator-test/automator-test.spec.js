/* eslint-disable */
const automator = require('miniprogram-automator')

describe('index automator test', () => {
  let miniprogram, page, element

  beforeAll(async () => {
    jest.setTimeout(30000)
    miniprogram = await automator.launch({
      cliPath: '/Applications/wechatwebdevtools.app/Contents/MacOS/cli',
      projectPath: '/Users/didi/Desktop/自己的项目/mpx-unit-test/dist/wx'
    })
    // await page.waitFor(50000)
    page = await miniprogram.reLaunch('/pages/index')
    element = await page.$('.test-btn')
    console.log('%c [ page.$(".test-btn") ]', 'font-size:13px; background:pink; color:#bf2c9f;', page.$('.test-btn'))
    await element.tap()
    // await miniprogram.close()
  })

  it('test', (done) => {
    expect(1).toBe(1)
    done()
  })
})

/* eslint-disable */
// const automator = require('miniprogram-automator')

// automator.launch({
//     cliPath: '/Applications/wechatwebdevtools.app/Contents/MacOS/cli',
//     projectPath: '/Users/didi/Desktop/自己的项目/mpx-unit-test'
// }).then(async miniProgram => {
//     const page = await miniProgram.reLaunch('/dist/wx')
//     await page.waitFor(500)
//     const element = await page.$('.test-btn')
//     console.log(await element.attribute('class'))
//     await element.tap()

//     await miniProgram.close()
// })
