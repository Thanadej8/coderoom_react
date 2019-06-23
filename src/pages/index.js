import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PageLoadable, patterns, ProtectedRoute } from '@routers'

import { useModalProps } from '@hooks'
import { AlertModal as BaseAlertModal } from '@components/modals'

const AsyncLoginPage = PageLoadable({ loader: () => import('@pages/login') })
const AsyncRegisterPage = PageLoadable({ loader: () => import('@pages/register') })
const AsyncForgotPasswordPage = PageLoadable({ loader: () => import('@pages/forgot_password') })
const AsyncMemberPage = PageLoadable({ loader: () => import('@pages/member') })

const AlertModal = props => {
  const { isOpen, closeModal, title, disabledButton, render, labelSubmit } = useModalProps(
    'alertModal',
  )
  return (
    <BaseAlertModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={title}
      disabledButton={disabledButton}
      labelSubmit={labelSubmit}
    >
      {render}
    </BaseAlertModal>
  )
}

export default () => {
  return (
    <>
      <Switch>
        <Route exact path={[patterns.root(), patterns.login()]} component={AsyncLoginPage} />
        <Route path={patterns.register()} component={AsyncRegisterPage} />
        <Route path={patterns.forgotPassword()} component={AsyncForgotPasswordPage} />
        <ProtectedRoute path={patterns.member()} component={AsyncMemberPage} />
      </Switch>
      <AlertModal />
    </>
  )
}
