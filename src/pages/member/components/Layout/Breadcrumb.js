import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { withRouter } from '@enhancers'
import Icon from '@components/Icon'

const HomeIcon = styled(Icon)`
  color: ${props => (props.isFirst ? '#117167' : '#888888')};
  cursor: pointer;
  font-size: 18px;
`
const CustomLink = styled(Link)`
  padding: 0 8px;
  &:nth-of-type(1) {
    padding-left: 0;
  }
  &:nth-last-of-type(1) {
    padding-right: 0;
  }
`
const ArrowRightIcon = styled(Icon)`
  color: #888888;
  font-size: 10px;
  padding: 0 8px;
`
const WrapperHierarchy = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  font-size: 18px;
  padding: 8px;
  background-color: #fff;
  display: flex;
  align-content: center;
  align-items: center;
`
const Name = styled.span`
  color: ${props => (props.isend ? '#117167' : '#888888')};
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
  const hierarchys = useMemo(() => getHierarchy(pathname), [pathname])
  const isMemberPage = hierarchys && hierarchys.length === 1 && hierarchys[0].name === 'member'
  if (isMemberPage) return null
  return (
    <Wrapper>
      {hierarchys &&
        hierarchys.length !== 0 &&
        hierarchys.map((obj, index) => {
          const { name, path } = obj
          if (name === 'member')
            return (
              <WrapperHierarchy key={`${name}_${index}`}>
                <CustomLink to={path}>
                  <HomeIcon name="home" isFirst={hierarchys.length === 1} />
                </CustomLink>
                {index < hierarchys.length - 1 ? <ArrowRightIcon name="angle-right" /> : null}
              </WrapperHierarchy>
            )
          return (
            <WrapperHierarchy key={`${name}_${index}`}>
              <CustomLink to={path}>
                <Name isEnd={index === hierarchys.length - 1}>{name}</Name>
              </CustomLink>
              {index < hierarchys.length - 1 ? <ArrowRightIcon name="angle-right" /> : null}
            </WrapperHierarchy>
          )
        })}
    </Wrapper>
  )
})
