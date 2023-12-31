import { useEffect, MutableRefObject } from 'react';

export const useKeyDownOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void,
  isListenerStopped: boolean,
  targetKey: string
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (ref.current!.contains(event.target as HTMLElement)) {
        return;
      }
      if (event.key === targetKey) {
        handler();
      }
    };
    if (!isListenerStopped) {
      document.removeEventListener('keydown', handleKeyDown);
    } else {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, isListenerStopped, ref, targetKey]);
};
