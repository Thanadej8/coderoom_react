import React from 'react'

import { useTitlePage } from '@hooks'
import Tabs, { TabPane } from '@components/Tabs'

import Layout from '@components/MemberLayout'
import Management from './Management'
import Information from './Information'

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
