import { useEffect, RefObject } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  enable?: boolean,
  ref?: RefObject<T>,
  handler?: (event: TEvent) => void,
) => {
  useEffect(() => {
    if (enable) {
      const listener = (event: TEvent) => {
        const el = ref?.current;
        if (!el || el.contains((event?.target as Node) || null)) {
          return;
        }

        if (handler) {
          handler(event);
        }
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }
  }, [ref, handler, enable]);
};
