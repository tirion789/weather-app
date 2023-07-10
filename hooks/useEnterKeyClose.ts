import { useEffect, MutableRefObject } from 'react';

export const useEnterKeyClose = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void,
  isListenerStopped: boolean
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.key !== 'Enter' && !ref?.current) ||
        ref.current!.contains(event.target as HTMLElement)
      ) {
        return;
      }
      handler();
    };
    if (!isListenerStopped) {
      document.removeEventListener('keydown', handleKeyDown);
    } else {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, isListenerStopped, ref]);
};
