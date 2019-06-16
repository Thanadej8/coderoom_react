import React from 'react'
import styled from '@emotion/styled'

import { Tabs as AntdTabs } from 'antd'

const Tabs = styled(AntdTabs)`
  .ant-tabs-bar {
    background-color: #fff;
  }
  .ant-tabs-tab {
    color: #969696;
    font-size: 16px;
    font-weight: 300;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #000;
    font-weight: 400 !important;
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: #000;
  }
  .ant-tabs-nav .ant-tabs-tab:active {
    color: #000;
  }
  .ant-tabs-ink-bar {
    background-color: ${props => props.theme.primaryColor};
    height: 3px;
    z-index: 0;
  }
`

export default props => {
  const { defaultActiveKey, children, onChange, className, tabPosition } = props
  return (
    <Tabs
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      className={className}
      tabPosition={tabPosition}
    >
      {children}
    </Tabs>
  )
}
