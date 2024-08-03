// App imports
import { PropertyApiProvider } from './property';
import { GoogleApiProvider } from './google';
import { LandmarkApiProvider } from './landmark';

export const ApiProvider = ({children}: any) => {
  return (
    <GoogleApiProvider>
    <PropertyApiProvider>
    <LandmarkApiProvider>
      {children}
    </LandmarkApiProvider>
    </PropertyApiProvider>
    </GoogleApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";