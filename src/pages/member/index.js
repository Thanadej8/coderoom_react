import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProtectedRoute, PageLoadable, patterns } from '@routers'
import Page404 from '@components/Page404'

const AsyncMemberDashboardPage = PageLoadable({ loader: () => import('@pages/member/dashboard') })
const AsyncMemberProfilePage = PageLoadable({ loader: () => import('@pages/member/profile') })
const AsyncMemberCoursesPage = PageLoadable({ loader: () => import('@pages/member/courses') })

export default props => (
  <Switch>
    <ProtectedRoute
      exact
      path={[patterns.member(), patterns.memberDashboard()]}
      component={AsyncMemberDashboardPage}
    />
    <ProtectedRoute exact path={patterns.memberProfile()} component={AsyncMemberProfilePage} />
    <ProtectedRoute exact path={patterns.memberCourses()} component={AsyncMemberCoursesPage} />
    <Route component={Page404} />
  </Switch>
)
