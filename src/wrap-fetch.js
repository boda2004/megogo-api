import signedRequest from './signed-request'
import querystring from 'querystring'
import fetch from 'node-fetch'

const apiUrl = process.env['API_URL']

const wrapFetch = async(url, params = {}) => {
  const query = signedRequest(querystring.stringify(params))
  const responseBody = await  fetch(`${apiUrl}/${url}?${query}`)
  return await responseBody.json()
}

export default wrapFetch
