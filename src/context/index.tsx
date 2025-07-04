// App imports
import { GeoProvider } from './geo';
import { SliderProvider } from './slider';
import { DraggableProvider } from './draggable';
import { TooltipProvider } from './tooltip';
import { ApiProvider } from './api';

export const ContextProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <SliderProvider>
    <DraggableProvider>
    <TooltipProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </TooltipProvider>
    </DraggableProvider>
    </SliderProvider>
    </GeoProvider>
  )
}

ContextProvider.displayName="ContextProvider";