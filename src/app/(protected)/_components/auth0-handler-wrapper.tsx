'use client'
import {useAuth0} from '@auth0/auth0-react'
import {ReactNode} from 'react'

type Auth0HandleAuthWrapperProp = Readonly<{
   children: ReactNode
}>

function Auth0HandlerWrapper(prop: Auth0HandleAuthWrapperProp) {

   const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()

   if (isLoading)
      return <div>loading...</div>

   if (!isAuthenticated) {
      loginWithRedirect().then()
      return <div>xxx...</div>
   }

   return <div>{prop.children}</div>
}

export default Auth0HandlerWrapper
