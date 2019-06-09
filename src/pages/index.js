import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PageLoadable, paths } from '@routers'

const AsyncLoginPage = PageLoadable({ loader: () => import('@pages/login') })
const AsyncRegisterPage = PageLoadable({ loader: () => import('@pages/register') })

export default () => {
  return (
    <Switch>
      <Route exact path={paths.root()} component={AsyncLoginPage} />
      <Route path={paths.register()} component={AsyncRegisterPage} />
    </Switch>
  )
}
