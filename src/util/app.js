import Cookies from 'js-cookie'

export const TOKEN_KEY = 'TOKEN'

export function setToken (token) {
  // 7天到期时间
  Cookies.set(TOKEN_KEY, token, { expires: 7 })
}

export function getToken () {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return null
}

export function removeToken () {
  Cookies.remove(TOKEN_KEY)
}
