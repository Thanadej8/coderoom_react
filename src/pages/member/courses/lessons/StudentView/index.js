import React from 'react'
import styled from '@emotion/styled'

import Layout from './components/Layout'
import ProblemDetailModal from './components/ProblemDetailModal'

export default props => {
  return (
    <Layout>
      Student Lessons View
      <ProblemDetailModal />
    </Layout>
  )
}
