import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProtectedRoute, PageLoadable, patterns } from '@routers'
import Page404 from '@components/Page404'

const AsyncMemberDashboardPage = PageLoadable({ loader: () => import('@pages/member/dashboard') })
const AsyncMemberProfilePage = PageLoadable({ loader: () => import('@pages/member/profile') })
const AsyncMemberCoursesPage = PageLoadable({ loader: () => import('@pages/member/courses') })
const AsyncMemberCoursesMembersPage = PageLoadable({
  loader: () => import('@pages/member/courses/members'),
})
const AsyncMemberCoursesLessonsPage = PageLoadable({
  loader: () => import('@pages/member/courses/lessons'),
})
const AsyncMemberCoursesLessonsProblemsPage = PageLoadable({
  loader: () => import('@pages/member/courses/lessons/problems'),
})

export default props => {
  return (
    <Switch>
      <ProtectedRoute
        exact
        path={[patterns.member(), patterns.memberDashboard(), patterns.memberDashboardCourses()]}
        component={AsyncMemberDashboardPage}
      />
      <ProtectedRoute exact path={patterns.memberProfile()} component={AsyncMemberProfilePage} />
      <ProtectedRoute
        exact
        path={[patterns.memberCourses(), patterns.courseDashboardLessons()]}
        component={AsyncMemberCoursesPage}
      />
      <ProtectedRoute
        exact
        path={patterns.courseMembers()}
        component={AsyncMemberCoursesMembersPage}
      />
      <ProtectedRoute
        exact
        path={[patterns.courseLessons(), patterns.courseDashboardProblems()]}
        component={AsyncMemberCoursesLessonsPage}
      />
      <ProtectedRoute
        exact
        path={patterns.courseProblems()}
        component={AsyncMemberCoursesLessonsProblemsPage}
      />
      <Route component={Page404} />
    </Switch>
  )
}
