import wrapFetch from './wrap-fetch'

const login = async({login, password, remember}) => {
  remember = remember === undefined ? 1 : remember
  return await wrapFetch('auth/login', {login, password, remember})
}

export default login
