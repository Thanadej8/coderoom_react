const ACCESS_TOKEN = 'accessToken'

export const setAccessToken = accessToken => window.localStorage.setItem(ACCESS_TOKEN, accessToken)
export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN)
export const isAccessTokenPresent = () => getAccessToken() !== null
