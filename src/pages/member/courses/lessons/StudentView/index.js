import React from 'react'
import styled from '@emotion/styled'

import { useTitlePage } from '@hooks'

import Layout from './components/Layout'
import ProblemDetailModal from './components/ProblemDetailModal'

export default props => {
  useTitlePage('Problem Name')
  return (
    <Layout>
      Student Lessons View
      <ProblemDetailModal />
    </Layout>
  )
}
