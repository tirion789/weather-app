import { useEffect, MutableRefObject } from 'react';

export const useOutsideClick = (ref: MutableRefObject<HTMLElement | null>, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref?.current || ref.current!.contains(event.target as HTMLElement)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, ref]);
};
