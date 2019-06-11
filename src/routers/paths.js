import pathToRegexp from 'path-to-regexp'
import queryString from 'query-string'
import { pick } from 'ramda'

const configs = [
  { name: 'root', path: '' },
  { name: 'login', path: 'login' },
  { name: 'register', path: 'register' },
  { name: 'forgotPassword', path: 'forgot-password' },
  { name: 'member', path: 'member' },
  { name: 'memberProfile', path: 'member/profile' },
  { name: 'memberDashboard', path: 'member/dashboard' },
  { name: 'memberCourses', path: 'member/courses/:id' },
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
const regulars = {}

routeConfigs.forEach(route => {
  const { name, pattern } = route
  const regular = pathToRegexp(pattern)

  paths[name] = params => getPath(name, params)
  regulars[regular] = name
})

export const regularPaths = regulars

export default paths