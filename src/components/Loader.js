import React from 'react'
import { SyncLoader, HashLoader } from 'react-spinners'
import { css } from '@emotion/core'

const override = css`
  /* div {
    background-color: #1d7c5c;
    width: 14px;
    height: 14px;
    margin: 3px;
  } */
`

export default ({ className }) => (
  <HashLoader css={className || override} sizeUnit={'px'} color="#0a218f" />
)
