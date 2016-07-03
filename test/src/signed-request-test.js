import {assert} from 'chai'
import signedRequest from '../../src/signed-request'

describe('sign', () => {
  it('should generate signed query string', () => {
    assert.equal('limit=100&category_id=16&lang=ua&sign=18400c0e1f775e638adccbe9940078c7_kodi_j1', signedRequest('limit=100&category_id=16&lang=ua'))
  })
})
