import React from 'react'

import { useTitlePage } from '@hooks'
import Layout from '../components/Layout'

export default props => {
  useTitlePage('Dashboard')
  return <Layout>-</Layout>
}
