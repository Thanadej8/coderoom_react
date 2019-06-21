import { Axios } from 'axios'
import { camelizeKeys, decamelizeKeys, decamelize } from 'humps'

import { isAccessTokenPresent, getAccessToken } from './session'

const BACKEND_URL = `${process.env.BACKEND_API_ENDPOINT}/${process.env.BACKEND_API_PATH}`

const getHeaders = () => {
  const headers = {}

  if (isAccessTokenPresent()) {
    // TODO ถามพี่มิก header accestToken
    // headers[''] = getAccessToken()
  }

  return headers
}

const convertToFormData = (params, name, form = new FormData()) => {
  if (params instanceof Array) {
    params.forEach(item => {
      convertToFormData(item, `${name}[]`, form)
    })
  } else if (params instanceof Object && !(params instanceof Date) && !(params instanceof File)) {
    Object.keys(params).forEach(key => {
      convertToFormData(params[key], name ? `${name}[${decamelize(key)}]` : decamelize(key), form)
    })
  } else if (params !== undefined && params !== null) form.append(name, params)
  return form
}

const defaultConfig = {
  baseURL: BACKEND_URL,
  timeout: 30000,
  headers: getHeaders(),
}

class Http extends Axios {
  constructor(config) {
    super({ ...defaultConfig, ...config })

    this.interceptors.request.use(request => {
      // TODO คุยกับพี่มิก รอทำ api
      console.log('request', request)
      return request
    })

    this.interceptors.response.use(
      rawResponse => {
        const response = camelizeKeys(rawResponse)
        return { data: { ...response.data } }
      },
      error => {
        // TODO คุยกับพี่มิก
        // const errorResponse = camelizeKeys(error.response)
        // if (!errorResponse || !errorResponse.data) return null
        // const { code, error, message } = errorResponse.data
        // if (code === 'server_error') {
        // app.setAppError({ message, ...error })
        // }
        // return { code, error, message }
        return Promise.reject(error)
      },
    )
  }

  get(path, params, options = {}) {
    return super.get(path, {
      params: decamelizeKeys(params),
      ...options,
    })
  }

  post(path, params, options = {}) {
    super.post(path, decamelizeKeys(params), {
      ...options,
    })
  }

  put(path, params, options = {}) {
    super.put(path, decamelizeKeys(params), {
      ...options,
    })
  }

  patch(path, params, options = {}) {
    super.put(path, decamelizeKeys(params), { ...options })
  }

  delete(path, params, options = {}) {
    super.delete(path, {
      params: decamelizeKeys(params),
      ...options,
    })
  }

  postWithFile(path, params = {}, options = {}) {
    super.post(path, convertToFormData(params), {
      'Content-Type': 'multipart/form-data',
      ...options,
    })
  }
}

export default new Http({})
