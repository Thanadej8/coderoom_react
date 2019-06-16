import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { withRouter } from '@enhancers'
import Icon from '@components/Icon'

const HomeIcon = styled(Icon)`
  color: ${props => (props.isFirst ? props.theme.primaryColor : '#969696')};
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
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
  color: #969696;
  font-size: 10px;
  padding: 0 8px;
`
const WrapperHierarchy = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  font-size: 16px;
  padding: 5px 10px;
  padding-left: 0px;
  margin-bottom: 5px;
  display: flex;
  align-content: center;
  align-items: center;
`
const Name = styled.span`
  color: ${props => (props.isEnd ? props.theme.primaryColor : '#969696')};
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
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
                <Name isEnd={index === hierarchys.length - 1}>{capitalizeFirstLetter(name)}</Name>
              </CustomLink>
              {index < hierarchys.length - 1 ? <ArrowRightIcon name="angle-right" /> : null}
            </WrapperHierarchy>
          )
        })}
    </Wrapper>
  )
})
