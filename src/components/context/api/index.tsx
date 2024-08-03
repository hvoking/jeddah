// App imports
import { PropertyApiProvider } from './property';
import { GoogleApiProvider } from './google';

export const ApiProvider = ({children}: any) => {
  return (
    <GoogleApiProvider>
    <PropertyApiProvider>
      {children}
    </PropertyApiProvider>
    </GoogleApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";