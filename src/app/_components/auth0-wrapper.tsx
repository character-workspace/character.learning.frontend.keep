'use client'
import {Auth0Provider} from '@auth0/auth0-react'
import Auth0Config from '@/services/auth0/auth0-config'
import {ReactNode} from 'react'

type Auth0ProviderClientLayoutProp = Readonly<{
   children: ReactNode;
}>

function Auth0Wrapper(prop: Auth0ProviderClientLayoutProp) {
   return (
      <Auth0Provider {...Auth0Config}>
         {prop.children}
      </Auth0Provider>
   )
}

export default Auth0Wrapper