import { useEffect, MutableRefObject } from 'react';

export const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void,
  isListenerStopped: boolean = false
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref?.current || ref.current!.contains(event.target as HTMLElement)) {
        return;
      }
      handler();
    };
    if (!isListenerStopped) {
      document.removeEventListener('mousedown', handleClickOutside);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, ref, isListenerStopped]);
};
