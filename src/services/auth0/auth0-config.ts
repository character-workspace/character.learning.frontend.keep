import {Auth0ClientOptions} from '@auth0/auth0-spa-js/src/global'

const Auth0Config: Readonly<Auth0ClientOptions> = Object.freeze({
   domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? '',
   clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? '',
   authorizationParams: {
      redirect_uri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
      audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
   }
})

export default Auth0Config