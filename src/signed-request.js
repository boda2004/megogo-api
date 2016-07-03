import querystring from 'querystring'
import crypto from 'crypto'

const privateKey = process.env['API_PRIVATE_KEY']
const publicKey = process.env['API_PUBLIC_KEY']

const signedRequest = (query = '') => {
  const parts = querystring.parse(query)
  const hashBasis = Object.keys(parts).map((k)=>`${k}=${parts[k]}`).join('')
  const signature = crypto.createHash('md5').update(hashBasis + privateKey).digest('hex') + publicKey
  return querystring.stringify({...parts, sign: signature})
}

export default signedRequest
