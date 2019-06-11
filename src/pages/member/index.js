import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProtectedRoute, PageLoadable, paths } from '@routers'
import Page404 from '@components/Page404'
import Layout from './components/Layout'

const AsyncMemberDashboardPage = PageLoadable({ loader: () => import('@pages/member/dashboard') })
const AsyncMemberProfilePage = PageLoadable({ loader: () => import('@pages/member/profile') })
const AsyncMemberCoursesPage = PageLoadable({ loader: () => import('@pages/member/courses') })

export default props => (
  <Layout>
    <Switch>
      <ProtectedRoute
        exact
        path={[paths.member(), paths.memberDashboard()]}
        component={AsyncMemberDashboardPage}
      />
      <ProtectedRoute exact path={paths.memberProfile()} component={AsyncMemberProfilePage} />
      <ProtectedRoute exact path="/member/courses/:id" component={AsyncMemberCoursesPage} />
      <Route component={Page404} />
    </Switch>
  </Layout>
)
