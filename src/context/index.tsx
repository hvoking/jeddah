// App imports
import { ApiProvider } from './api';
import { FiltersProvider } from './filters';
import { MapboxProvider } from './mapbox';
import { TooltipProvider } from './tooltip';
import { DraggableProvider } from './draggable';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <MapboxProvider>
    <DraggableProvider>
    <TooltipProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </TooltipProvider>
    </DraggableProvider>
    </MapboxProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";