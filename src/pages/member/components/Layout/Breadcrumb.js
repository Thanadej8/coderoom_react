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

const getSubHierarchyPath = ({ hierarchy, path, index }) => {
  const path = '/'
}

export default withRouter(props => {
  console.log('props', props)
  const { location } = props
  const { pathname } = location
  const mathPathName = useMemo(
    () => (pathname && pathname.length !== 0 ? pathname.substring(1, pathname.length) : null),
    [pathname],
  )
  console.log('mathPathName', mathPathName)
  const hierarchy = useMemo(() => mathPathName && mathPathName.split('/'), [mathPathName])
  console.log('hierarchy', hierarchy)
  // member/dashboard
  return (
    <Breadcrumb>
      {hierarchy.length !== 0 &&
        hierarchy.map((path, index) => {
          if (path === 'member')
            return (
              <Breadcrumb.Item>
                <CustomLink to={paths.member()}>
                  <HomeIcon name="home" />
                </CustomLink>
              </Breadcrumb.Item>
            )
          const subHierarchyPath = getSubHierarchyPath({ hierarchy, path, index })
          return (
            <Breadcrumb.Item>
              <CustomLink to={paths[path]()}>{path}</CustomLink>
            </Breadcrumb.Item>
          )
        })}
    </Breadcrumb>
  )
})
