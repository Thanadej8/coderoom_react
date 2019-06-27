import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion'

const WrapperHamberger = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: opacity 0.1s, 0.5s ease-in-out;
  cursor: pointer;

  ${props => props.theme.media('tablet')} {
    /* width: 25px;
    height: 20px; */
  }
  ${props => props.theme.media('computer')} {
    margin: 0;
  }

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    /* background: ${props => props.theme.primaryColor}; */
    background: #A5A7B0;
    border-radius: 4px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-of-type(1) {
      top: 2px;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      top: 7px;
    }

    &:nth-of-type(4) {
      bottom: 2px;
    }
  }
`

const open = css`
  span {
    &:nth-of-type(1) {
      top: 2px;
      width: 0%;
      left: 50%;
      opacity: 0;
    }

    &:nth-of-type(2) {
      transform: rotate(45deg);
    }

    &:nth-of-type(3) {
      transform: rotate(-45deg);
    }

    &:nth-of-type(4) {
      bottom: 2px;
      width: 0%;
      left: 50%;
      opacity: 0;
    }
  }
`

export default props => {
  const { onClick, isOpen } = props
  return (
    <WrapperHamberger className={`${isOpen ? open : ''}`} onClick={onClick}>
      <span />
      <span />
      <span />
      <span />
    </WrapperHamberger>
  )
}
