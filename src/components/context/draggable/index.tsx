// React imports
import { useRef, useContext, createContext } from 'react';

const DraggableContext: React.Context<any> = createContext(null)

export const useDraggable = () => {
  return (
    useContext(DraggableContext)
  )
}

export const DraggableProvider = ({children}: any) => {
  const draggableRef = useRef<any>(null);
  const offsetY = useRef<any>(0);
  const isDragging = useRef(false);

  const handleStart = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
      offsetY.current = (e.clientY || (e.touches && e.touches[0].clientY)) - draggableRef.current.getBoundingClientRect().top;
      isDragging.current = true;

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
  };

  const handleMove = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
      if (isDragging.current) {
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const offset = clientY - offsetY.current;
          const newTop = offset < 0 ? 0 : offset;
          if (newTop) {
              requestAnimationFrame(() => {
                  draggableRef.current.style.top = `${newTop}px`;
              });
          }
      }
  };

  const handleEnd = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
  };

  return (
    <DraggableContext.Provider value={{ 
      draggableRef, offsetY, isDragging, handleStart, handleMove, handleEnd
    }}>
      {children}
    </DraggableContext.Provider>
  )
}

DraggableContext.displayName = "DraggableContext";