import React, { useState, useEffect, useCallback } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Icon from '@components/Icon'
import image from '@assets/images/au.JPG'
import { logout } from '@stores/app'
import { withRouter } from '@enhancers'
import { paths } from '@routers'

import PageContainer from '../PageContainer'

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: fixed;
`
const Container = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  ${props => props.theme.media('tablet')} {
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
`
const Logo = styled.h1`
  font-size: 28px;
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
  cursor: pointer;
`
const WrapperProfile = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
`
const ProfileDetail = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
`
const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid #f1f1f1;
  border-radius: 100%;
`
const ProfileName = styled.p`
  display: none;
  ${props => props.theme.media('tablet')} {
    padding: 0 10px;
    display: block;
  }
`
const AngleDownIcon = styled(Icon)`
  color: #000;
  font-size: 10px;
  padding-left: 10px;
  ${props => props.theme.media('tablet')} {
    padding-left: 0px;
  }
`
const ProfileActions = styled.ul`
  position: fixed;
  top: 61px;
  right: 0;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 0px;
  background-color: #fff;
  width: 100vw;
  z-index: 1;
  max-height: ${props => (props.isOpen ? (props.isAdmin ? '150px' : '105px') : '0px')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  padding: ${props => (props.isOpen ? '10px' : '0px')};
  transition: ${props =>
    props.isOpen
      ? 'max-height 0.2s, padding 0.2s  ease-out'
      : 'max-height 0.2s, padding 0.2s, opacity 0.1s  ease-in'};
  ${props => props.theme.media('tablet')} {
    max-height: ${props => (props.isOpen ? (props.isAdmin ? '150px' : '105px') : '0px')};
    position: absolute;
    top: 48px;
    width: 100%;
  }
`
const Action = styled.li`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 10px;
  text-align: center;
  list-style-type: none;
  border-bottom: 1px solid #f1f1f1;
  a {
    color: #000;
  }
  &:nth-last-of-type(1) {
    border-bottom: 0;
  }
  ${props => props.theme.media('tablet')} {
    text-align: left;
  }
`

const Profile = withRouter(props => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { history } = props

  const handleMouseClick = useCallback(event => {
    const className = event.target.className
    const clickProfile =
      typeof className === 'string' &&
      (className.indexOf('WrapperProfile') !== -1 ||
        className.indexOf('ProfileDetail') !== -1 ||
        className.indexOf('ProfileImage') !== -1 ||
        className.indexOf('ProfileName') !== -1 ||
        className.indexOf('ProfileActions') !== -1 ||
        className.indexOf('Action') !== -1 ||
        className.indexOf('AngleDownIcon') !== -1)

    if (!clickProfile) {
      setIsOpen(false)
    }
  }, [])

  const handleLogout = useCallback(async () => {
    dispatch(logout())
    history.push(paths.login())
  })

  useEffect(() => {
    window && window.addEventListener('click', handleMouseClick)

    return () => {
      window && window.removeEventListener('click', handleMouseClick)
    }
  })
  // TODO what for check admin Type
  const isAdmin = true

  return (
    <WrapperProfile>
      <ProfileDetail onClick={() => setIsOpen(!isOpen)}>
        <ProfileImage src={image} />
        <ProfileName>Thanadej Phadtong</ProfileName>
        <AngleDownIcon name="angle-down" />
      </ProfileDetail>
      <ProfileActions isOpen={isOpen} isAdmin={isAdmin}>
        <Action isOpen={isOpen}>
          <Link to={paths.memberProfile()}>Profile</Link>
        </Action>
        <Action isOpen={isOpen}>Switch to {isAdmin ? 'Teacher' : 'Admin'}</Action>
        <Action isOpen={isOpen} onClick={handleLogout}>
          Logout
        </Action>
      </ProfileActions>
    </WrapperProfile>
  )
})

export default props => (
  <Header>
    <Container>
      <Link to={paths.member()}>
        <Logo>CodeRoom</Logo>
      </Link>
      <Profile />
    </Container>
  </Header>
)
