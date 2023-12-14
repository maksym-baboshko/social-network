import { useCallback, useMemo } from 'react'

import { useNavigate } from 'react-router-dom'
import { type SubmitHandler } from 'react-hook-form'

import { userActions } from '@entities/User'
import { useAuthGuard } from '@shared/hooks/common'
import { getErrorMessage } from '@shared/lib/api'
import { useLoginMutation } from '@shared/api/auth'
import { useAppDispatch } from '@shared/hooks/store'

import { type tAuthCredentials } from '../model/types'

export const useLogin = (onLogin: (() => void) | undefined) => {
  const [login, { isLoading, error }] = useLoginMutation()
  const { from } = useAuthGuard()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const authErrMsg = useMemo(() => getErrorMessage(error), [error])

  const loginHandler: SubmitHandler<tAuthCredentials> = useCallback(
    async (credentials) => {
      const res = await login(credentials)

      if ('data' in res) {
        onLogin && onLogin()
        dispatch(userActions.authWithCredentials(res.data))
        navigate(from, { replace: true })
      }
    },
    [from, navigate, dispatch, onLogin, login]
  )

  return { isAuthenticating: isLoading, authErrMsg, loginHandler }
}
