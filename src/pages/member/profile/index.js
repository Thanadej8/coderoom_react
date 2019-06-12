import React from 'react'
import styled from '@emotion/styled'
import { Tabs as AntdTabs } from 'antd'

import { useTitlePage } from '@hooks'
import Tabs from '@components/Tabs'

import Layout from '../components/Layout'
import Management from './Management'
import Information from './Information'

const { TabPane } = AntdTabs

export default props => {
  useTitlePage('profile')
  return (
    <Layout>
      <Tabs defaultActiveKey="information">
        <TabPane tab="Information" key="information">
          <Information />
        </TabPane>
        <TabPane tab="Management" key="management">
          <Management />
        </TabPane>
      </Tabs>
    </Layout>
  )
}
