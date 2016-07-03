import {assert} from 'chai'
import fs from 'fs'
import configuration from '../../src/configuration'

describe('configuration', () => {
  it('calls configuration successfully', async() => {
    const expectedResult = JSON.parse(fs.readFileSync(`${__dirname}/../samples/configuration_success.json`))
    apiNock
      .get('/configuration')
      .query({sign: 'dc1f2f8a4767cdc7ea07692ff66b8113_kodi_j1'})
      .reply(200, expectedResult)
    const ret = await configuration()
    assert.deepEqual(expectedResult, ret)
  })
})
