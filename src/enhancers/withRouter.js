import React, { useMemo } from 'react'
import { withRouter } from 'react-router-dom'
import { camelizeKeys } from 'humps'
import queryString from 'query-string'

export default Component =>
  withRouter(props => {
    const { location, match } = props
    const dynamicParams = useMemo(() => {
      return camelizeKeys(match.params)
    }, [match.params])
    const query = useMemo(() => {
      return queryString.parse(location.search)
    }, [location.search])
    return <Component {...props} query={query} dynamicParams={dynamicParams} />
  })
