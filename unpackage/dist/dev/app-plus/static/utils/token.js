import Cookies from 'js-cookie'

const token = 'TOKEN'
export function getToken () {
  return Cookies.get(token)
}

export function setToken (val) {
  return Cookies.set(token, val)
}

export function removeToken () {
  return Cookies.remove(token)
}