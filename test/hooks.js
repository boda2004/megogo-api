import nock from 'nock'
const apiUrl = process.env['API_URL']
global.apiNock = undefined

beforeEach(()=> {
  nock.disableNetConnect();
  global.apiNock = nock(apiUrl)
})

afterEach((cb) => {
  if (!apiNock.isDone()) {
    cb(new Error('Extra mocked requests remaining: ' + apiNock.pendingMocks()))
  } else {
    cb()
  }
  nock.cleanAll()
})
