import {assert} from 'chai'
import fs from 'fs'
import login from '../../src/login'

describe('login', () => {
  it('should successfully login with credentials', async() => {
    const expectedResult = JSON.parse(fs.readFileSync(`${__dirname}/../samples/login_success.json`))
    apiNock
      .get('/auth/login')
      .query({
        login: 'boda2004@gmail.com',
        password: '<scrambled>',
        remember: '1',
        sign: 'ee0d5be31afb0348d574f9da5abe6de7_kodi_j1'
      })
      .reply(200, expectedResult)
    const ret = await login({login: 'boda2004@gmail.com', password: '<scrambled>'})
    assert.deepEqual(expectedResult, ret)
  })
})
