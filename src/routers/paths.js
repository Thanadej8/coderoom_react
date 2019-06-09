import pathToRegexp from 'path-to-regexp'
import queryString from 'query-string'
import { pick } from 'ramda'

const configs = [
  { name: 'root', path: '' },
  { name: 'register', path: 'register' },
  { name: 'forgotPassword', path: 'forgot-password' },
  // { name: 'member', path: 'member' },
  // { name: 'memberDashboard', path: 'member/dashboard' },
  // { name: 'memberOrders', path: 'member/orders' },
  // { name: 'memberPhoneNumbers', path: 'member/phonenumbers' },
  // { name: 'memberCategories', path: 'member/categories' },
  // { name: 'memberUsers', path: 'member/users' },
  // { name: 'memberSettings', path: 'member/settings' },
]

const prefix = ''
const routeConfigs = []

configs.forEach(config => {
  const name = config.name
  const path = config.path === undefined ? name : config.path
  const page = config.page === undefined ? path.replace(/:/g, '_') : config.page
  const pattern = `${prefix}/${path}`
  routeConfigs.push({ name, pattern, page })
})

const getPath = (name, params = {}) => {
  const route = routeConfigs.find(r => r.name === name)
  if (!route) throw new Error('Not found path name')
  const pattern = route.pattern
  const toPath = pathToRegexp.compile(pattern)

  const path = toPath(params)

  const routeMatched = /:(\w+)/.exec(pattern)
  const routeKeys = routeMatched === null ? [] : [routeMatched[1]]
  const queryKeys = Object.keys(params).filter(key => !routeKeys.includes(key))

  if (queryKeys.length === 0) return path
  const queryParams = pick(queryKeys, { ...params })
  const query = queryString.stringify(queryParams)
  if (Object.keys(queryParams).length === 0) return path
  return `${path}?${query}`
}

const paths = {}
routeConfigs.forEach(route => {
  paths[route.name] = params => getPath(route.name, params)
})

export default paths
