import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PageLoadable, paths, ProtectedRoute } from '@routers'

const AsyncLoginPage = PageLoadable({ loader: () => import('@pages/login') })
const AsyncRegisterPage = PageLoadable({ loader: () => import('@pages/register') })
const AsyncForgotPasswordPage = PageLoadable({ loader: () => import('@pages/forgot_password') })
const AsyncMemberPage = PageLoadable({ loader: () => import('@pages/member') })

export default () => {
  return (
    <Switch>
      <Route exact path={[paths.root(), paths.login()]} component={AsyncLoginPage} />
      <Route path={paths.register()} component={AsyncRegisterPage} />
      <Route path={paths.forgotPassword()} component={AsyncForgotPasswordPage} />
      <ProtectedRoute path={paths.member()} component={AsyncMemberPage} />
    </Switch>
  )
}
