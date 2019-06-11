import React, { useMemo } from 'react'
import { Breadcrumb } from 'antd'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { withRouter } from '@enhancers'
import { configs, paths } from '@routers'
import Icon from '@components/Icon'

const HomeIcon = styled(Icon)`
  color: #000;
  display: inline-block;
  cursor: pointer;
`
const CustomLink = styled(Link)`
  color: #000;
`

const getHierarchy = pathname => {
  let hierarchy = []
  const splitPath = pathname && pathname.substr(1, pathname.length).split('/')
  splitPath &&
    splitPath.length !== 0 &&
    splitPath.forEach((path, index) => {
      if (path === '') return
      if (index === 0) {
        hierarchy = [{ name: path, path: `/${path}` }]
      } else {
        const beforePath = hierarchy[index - 1]
        hierarchy = [...hierarchy, { name: path, path: `${beforePath.path}/${path}` }]
      }
    })
  return hierarchy
}

export default withRouter(props => {
  const { location } = props
  const { pathname } = location
  const hierarchys = getHierarchy(pathname)

  return (
    <Breadcrumb>
      {hierarchys.length !== 0 &&
        hierarchys.map((obj, index) => {
          console.log('obj', obj)
          if (obj.name === 'member')
            return (
              <Breadcrumb.Item>
                <CustomLink to={obj.path}>
                  <HomeIcon name="home" />
                </CustomLink>
              </Breadcrumb.Item>
            )
          return (
            <Breadcrumb.Item>
              <CustomLink to={obj.path}>{obj.name}</CustomLink>
            </Breadcrumb.Item>
          )
        })}
    </Breadcrumb>
  )
})
