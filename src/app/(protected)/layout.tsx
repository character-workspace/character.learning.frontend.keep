import {ReactNode} from 'react'
import Auth0HandlerWrapper from '@/app/(protected)/_components/auth0-handler-wrapper'

type ProtectedLayoutProp = Readonly<{
   children: ReactNode;
}>

function ProtectedLayout(prop: ProtectedLayoutProp) {
   return <Auth0HandlerWrapper>{prop.children}</Auth0HandlerWrapper>
}

export default ProtectedLayout