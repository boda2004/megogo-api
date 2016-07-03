import wrapFetch from './wrap-fetch'

const configuration = async() => {
  return await wrapFetch('configuration')
}

export default configuration
